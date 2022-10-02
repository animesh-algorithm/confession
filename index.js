let admin = require("firebase-admin");

let serviceAccount = require("./confessions-ef73b-firebase-adminsdk-aw1g8-2b55b5d425.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://confessions-ef73b.firebaseio.com",
});

admin
  .firestore()
  .collection("confessions")
  .get()
  .then((snapshot) => {
    let count = 0;
    snapshot.forEach((doc) => {
      if (doc.data().userId === "XBODMyuxsjQCw7LDM6ivYt0Atqq1") {
        admin
          .firestore()
          .collection("confessions")
          .doc(doc.id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
    });
  });
