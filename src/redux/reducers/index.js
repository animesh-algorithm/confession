import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'
import confessions from './confessions'
import auth from './auth'
import follow from './follow'
import users from './users'

export default combineReducers({
    auth,
    confessions,
    follow,
    users,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})