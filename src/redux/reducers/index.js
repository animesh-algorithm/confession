import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'
import confessions from './confessions'
import auth from './auth'
import follow from './follow'

export default combineReducers({
    auth,
    confessions,
    follow,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})