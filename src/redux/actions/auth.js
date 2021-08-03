import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNOUT_ERROR, SIGNOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../constants/auth"

export const signIn = (credentials) => async (dispatch, getState, { getFirebase }) => {
    try {
        const firebase = getFirebase()
        await firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        dispatch({ type: SIGNIN_SUCCESS })
    } catch (error) {
        dispatch({
            type: SIGNIN_ERROR, error
        })
    }
}

export const signUp = (credentials) => async (dispatch, getState, { getFirebase, getFirestore } ) => {
    try {
        const firebase = getFirebase()
        const firestore = getFirestore()

        const response = await firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        )

        await firestore.collection('profile').doc(response.user.uid).set({
            fname: credentials.fname,
            lname: credentials.lname,
            username: credentials.email.split('@')[0],
            followers: [response.user.uid],
            following: [response.user.uid]
        })

        dispatch({ type: 'SIGNUP_SUCCESS' })
    } catch (error) {
        dispatch({
            type: SIGNUP_ERROR, error
        })
    }
}

export const signOut = () => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        await firebase.auth().signOut()

        dispatch({ type: SIGNOUT_SUCCESS })
    }
}