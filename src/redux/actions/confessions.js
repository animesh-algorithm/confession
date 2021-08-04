import {CREATE_CONFESSION_SUCCESS, CREATE_CONFESSION_ERROR, GET_CONFESSION } from '../constants/confession'

export const createConfession = (confession) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()

        if (confession.location === '/explore') {
            await firestore.collection('confessions').add({
                content: confession.content,
                createdAt: new Date(),
                username: 'anonymous',
                userFname: 'Anonymous',
                userLname: 'User',
                userId: 'XBODMyuxsjQCw7LDM6ivYt0Atqq1'
            })
        } else {
            const profile = getState().firebase.profile
            const uid = getState().firebase.auth.uid
            await firestore.collection('confessions').add({
                content: confession.content,
                createdAt: new Date(),
                username: profile.username,
                userFname: profile.fname,
                userLname: profile.lname,
                userId: uid
            })
        }

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

export const getConfession = (id) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()
        const confession = await firestore.collection('confession').doc(id).get()
        dispatch({
            type: GET_CONFESSION,
            confession
        })
    } catch (error) {
        console.log(error)
    }
}