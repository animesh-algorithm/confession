import {CREATE_CONFESSION_SUCCESS, CREATE_CONFESSION_ERROR } from '../constants/confession'

export const createConfession = (confession) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        console.log(getState())
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid
        await firestore.collection('confessions').add({
            ...confession,
            createdAt: new Date(),
            username: profile.username,
            userFname: profile.fname,
            userLname: profile.lname,
            userId: uid
        })
        dispatch({
            type: CREATE_CONFESSION_SUCCESS,
            confession
        })
    } catch (error) {
        dispatch({
            type: CREATE_CONFESSION_ERROR,
            error
        })
    }
}