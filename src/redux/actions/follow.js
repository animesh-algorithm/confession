import { FOLLOW_SUCCESS, FOLLOW_ERROR } from "../constants/follow"

export const followUser = (beneficiaryId) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()
        const userId = getState().firebase.auth.uid

        let userFollowing = getState().firebase.profile.following
        userFollowing.push(beneficiaryId)

        const beneficiary = await firestore.collection('profile').doc(beneficiaryId).get()
        let beneficiaryFollowers = beneficiary.data().followers
        beneficiaryFollowers.push(userId)

        userFollowing = new Set(userFollowing)
        userFollowing = [...userFollowing]

        beneficiaryFollowers = new Set(beneficiaryFollowers)
        beneficiaryFollowers = [...beneficiaryFollowers]

        await firestore.collection('profile').doc(userId).update({
            following: userFollowing
        })

        await firestore.collection('profile').doc(beneficiaryId).update({
            followers: beneficiaryFollowers
        })
        dispatch({
            type: FOLLOW_SUCCESS
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FOLLOW_ERROR, error
        })  
    }
}