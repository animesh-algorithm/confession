import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'
import confessions from './confessions'
import auth from './auth'
import follow from './follow'
import users from './users'
import comments from './comments'

export default combineReducers({
    auth,
    confessions,
    follow,
    users,
    comments,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})