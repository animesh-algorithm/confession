import { GET_USERS } from '../constants/users'

export const getUsers = () => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firestore = getFirestore()
        const users = await firestore.collection('profile').get()
        const snapshots = users.docs.map(doc => doc.data())
        dispatch({
            type: GET_USERS,
            snapshots
        })
    } catch (error) {
        console.log(error)
    }
}