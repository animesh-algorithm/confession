import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'
import confessions from './confessions'
import auth from './auth'

export default combineReducers({
    auth,
    confessions,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})