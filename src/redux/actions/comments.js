import { CREATE_COMMENT } from "../constants/comments";

export const createComment = (comment) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()
        const userId = getState().firebase.auth.uid

        const newComment = await firestore.collection('comments').add({
            content: comment.content,
            confessionId: comment.confession.id,
            userId: userId,
            createdAt: new Date(),
            likes: []
        })

        const user = await firestore.collection('profile').doc(userId).get()
        let commentedConfessions = user.data().commentedConfessions
        if (!commentedConfessions) {
            commentedConfessions = []
        }
        commentedConfessions.push(newComment.id)

        const confession = await firestore.collection('confessions').doc(comment.confession.id).get()
        let comments = confession.data().comments
        let commentsFrom = confession.data().commentsFrom

        if (!comments) {
            comments = []
        }
        comments.push(newComment.id)

        if (!commentsFrom) {
            commentsFrom = []
        }
        commentsFrom.push(userId)
        commentsFrom = new Set(commentsFrom)
        commentsFrom = [...commentsFrom]

        await firestore.collection('profile').doc(userId).update({
            commentedConfessions: commentedConfessions
        })

        await firestore.collection('confessions').doc(comment.confession.id).update({
            comments: comments,
            commentsFrom: commentsFrom
        })

        dispatch({
            type: CREATE_COMMENT
        })
    } catch (error) {
        console.log(error)
    }
}