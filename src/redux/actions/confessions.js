import {
  CREATE_CONFESSION_SUCCESS,
  CREATE_CONFESSION_ERROR,
  GET_CONFESSION,
  LIKE_CONFESSION,
  UNLIKE_CONFESSION,
  DELETE_CONFESSION,
  UPDATE_CONFESSION,
} from "../constants/confession";

export const createConfession =
  (confession) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();

      if (confession.location === "/explore") {
        await firestore.collection("confessions").add({
          content: confession.content,
          createdAt: new Date(),
          username: "anonymous",
          userFname: "Anonymous",
          userLname: "User",
          userId: "XBODMyuxsjQCw7LDM6ivYt0Atqq1",
          userAvatar:
            "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_anonymous.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3",
        });
      } else {
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        await firestore.collection("confessions").add({
          content: confession.content,
          createdAt: new Date(),
          username: profile.username,
          userFname: profile.fname,
          userLname: profile.lname,
          userId: uid,
          userAvatar: profile.avatar
            ? profile.avatar
            : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3",
        });
      }

      dispatch({
        type: CREATE_CONFESSION_SUCCESS,
        confession,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CONFESSION_ERROR,
        error,
      });
    }
  };

export const getConfession =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      const confession = await firestore
        .collection("confessions")
        .doc(id)
        .get();
      let views = confession.data().views;
      if (!views) {
        views = 1;
      } else {
        views++;
      }
      await firestore.collection("confessions").doc(id).update({
        views: views,
      });
      dispatch({
        type: GET_CONFESSION,
        confession,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const likeConfession =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();

      const uid = getState().firebase.auth.uid;

      const confession = await firestore
        .collection("confessions")
        .doc(id)
        .get();
      let likes = confession.data().likes;
      if (!likes) {
        likes = [];
      }
      likes.push(uid);

      const user = await firestore.collection("profile").doc(uid).get();
      let likedConfessions = user.data().likedConfessions;
      if (!likedConfessions) {
        likedConfessions = [];
      }
      likedConfessions.push(id);

      likes = new Set(likes);
      likedConfessions = new Set(likedConfessions);

      likes = [...likes];
      likedConfessions = [...likedConfessions];

      await firestore.collection("confessions").doc(id).update({
        likes: likes,
      });
      await firestore.collection("profile").doc(uid).update({
        likedConfessions: likedConfessions,
      });

      dispatch({
        type: LIKE_CONFESSION,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const unlikeConfession =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();

      const uid = getState().firebase.auth.uid;

      const confession = await firestore
        .collection("confessions")
        .doc(id)
        .get();
      let likes = confession.data().likes;
      likes = likes.filter((id) => id !== uid);

      const user = await firestore.collection("profile").doc(uid).get();
      let likedConfessions = user.data().likedConfessions;
      likedConfessions = likedConfessions.filter(
        (confessionId) => confessionId !== id
      );

      await firestore.collection("confessions").doc(id).update({
        likes: likes,
      });
      await firestore.collection("profile").doc(uid).update({
        likedConfessions: likedConfessions,
      });
      dispatch({
        type: UNLIKE_CONFESSION,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteConfession =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      await firestore.collection("confessions").doc(id).delete();
      dispatch({
        type: DELETE_CONFESSION,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateConfession =
  (confession) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const { content, id } = confession;
      const firestore = getFirestore();
      await firestore.collection("confessions").doc(id).update({
        content: content,
      });
      dispatch({
        type: UPDATE_CONFESSION,
      });
    } catch (error) {
      console.log(error);
    }
  };
