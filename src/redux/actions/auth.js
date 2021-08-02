import { SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../constants/auth"

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
            username: credentials.email.split('@')[0]
        })

        dispatch({ type: 'SIGNUP_SUCCESS' })
    } catch (error) {
        dispatch({
            type: SIGNUP_ERROR, error
        })
    }
}