import { GET_USERS, UPDATE_PROFILE } from "../constants/users";

export const getUsers =
  () =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      const users = await firestore.collection("profile").get();
      const snapshots = users.docs.map((doc) => doc.data());
      dispatch({
        type: GET_USERS,
        snapshots,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateProfile =
  (id, file, updatedProfile) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firebase = getFirebase();
      const firestore = getFirestore();
      const uid = getState().firebase.auth.uid;
      if (file) {
        const bucketName = "avatars";
        let storageRef = firebase.storage().ref(`${bucketName}/avatar_${id}`);
        await storageRef.put(file);
        storageRef = firebase.storage().ref();
        storageRef
          .child(`${bucketName}/avatar_${id}`)
          .getDownloadURL()
          .then(async (url) => {
            await firestore.collection("profile").doc(id).update({
              avatar: url,
            });
            await firestore
              .collection("confessions")
              .get()
              .then((snapshots) =>
                snapshots.docs.forEach(async (doc) => {
                  if (doc.data().userId === uid) {
                    await firestore
                      .collection("confessions")
                      .doc(doc.id)
                      .update({
                        userAvatar: url,
                      });
                  }
                })
              );
          });
      }
      await firestore.collection("profile").doc(id).update({
        fname: updatedProfile.fname,
        lname: updatedProfile.lname,
        username: updatedProfile.username,
      });
      await firestore
        .collection("confessions")
        .get()
        .then((snapshots) =>
          snapshots.docs.forEach(async (doc) => {
            if (doc.data().userId === uid) {
              await firestore.collection("confessions").doc(doc.id).update({
                userFname: updatedProfile.fname,
                userLname: updatedProfile.lname,
                username: updatedProfile.username,
              });
            }
          })
        );
      dispatch({
        type: UPDATE_PROFILE,
      });
    } catch (error) {
      console.log(error);
    }
  };
