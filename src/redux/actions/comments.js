import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from "../constants/comments";

export const createComment =
  (comment) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;

      const newComment = await firestore.collection("comments").add({
        content: comment.content,
        confessionId: comment.confession.id,
        userId: userId,
        createdAt: new Date(),
        likes: [],
      });

      const user = await firestore.collection("profile").doc(userId).get();
      let commentedConfessions = user.data().commentedConfessions;
      if (!commentedConfessions) {
        commentedConfessions = [];
      }
      commentedConfessions.push(newComment.id);

      const confession = await firestore
        .collection("confessions")
        .doc(comment.confession.id)
        .get();
      let comments = confession.data().comments;
      let commentsFrom = confession.data().commentsFrom;

      if (!comments) {
        comments = [];
      }
      comments.push(newComment.id);

      if (!commentsFrom) {
        commentsFrom = [];
      }
      commentsFrom.push(userId);
      commentsFrom = new Set(commentsFrom);
      commentsFrom = [...commentsFrom];

      await firestore.collection("profile").doc(userId).update({
        commentedConfessions: commentedConfessions,
      });

      await firestore
        .collection("confessions")
        .doc(comment.confession.id)
        .update({
          comments: comments,
          commentsFrom: commentsFrom,
        });

      dispatch({
        type: CREATE_COMMENT,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteComment =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      const userId = getState().firebase.auth.uid;

      const comment = await firestore
        .collection("comments")
        .doc(id)
        .get()
        .then((snapshot) => snapshot.data());
      const confession = await firestore
        .collection("confessions")
        .doc(comment.confessionId)
        .get()
        .then((snapshot) => snapshot.data());
      const profile = await firestore
        .collection("profile")
        .doc(userId)
        .get()
        .then((snapshot) => snapshot.data());
      let commentedConfessions = profile.commentedConfessions;
      commentedConfessions = commentedConfessions.filter((item) => item !== id);
      let confessionComments = confession.comments.filter(
        (item) => item !== id
      );
      let count = 0;
      for (let commentId in confessionComments) {
        const comment = await firestore
          .collection("comments")
          .doc(commentId)
          .get()
          .then((snapshot) => snapshot.data());
        if (comment?.userId === userId) count++;
      }
      let commentsFrom;
      if (!count) {
        commentsFrom = confession.commentsFrom.filter(
          (item) => item !== userId
        );
      }
      await firestore.collection("comments").doc(id).delete();
      await firestore.collection("profile").doc(userId).update({
        commentedConfessions: commentedConfessions,
      });
      await firestore
        .collection("confessions")
        .doc(comment.confessionId)
        .update({
          comments: confessionComments,
          commentsFrom: commentsFrom,
        });
      dispatch({
        type: DELETE_COMMENT,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const editComment =
  (id, comment) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      await firestore.collection("comments").doc(id).update({
        content: comment.content,
      });
      dispatch({
        type: EDIT_COMMENT,
      });
    } catch (error) {
      console.log(error);
    }
  };
