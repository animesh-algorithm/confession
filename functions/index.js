const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.profileUpdated = functions.firestore
  .document("profile/{profileId}")
  .onUpdate(async (doc) => {
    const avatar = doc.after.avatar;
    await db
      .collection("confessions")
      .get()
      .then(async (snapshots) => {
        snapshots.docs.forEach(async (snapshot) => {
          if (snapshot.data().userId === doc.id) {
            await db.collection("confessions").doc(snapshot.id).update({
              userAvatar: avatar,
              updatedAt: admin.firestore.Timestamp.now(),
            });
          }
        });
      })
      .catch((error) => console.log(error));
  });
