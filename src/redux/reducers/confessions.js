import { CREATE_CONFESSION_SUCCESS, CREATE_CONFESSION_ERROR, GET_CONFESSION, LIKE_CONFESSION, UNLIKE_CONFESSION, DELETE_CONFESSION, UPDATE_CONFESSION } from "../constants/confession"

export default (state=[], action) => {
    switch (action.type) {
        case CREATE_CONFESSION_SUCCESS:
            console.log(action.confession)
            return state
        case CREATE_CONFESSION_ERROR:
            console.log('create confession error')
            return state
        case GET_CONFESSION:
            // console.log(action.confession)
            return action.confession
        case LIKE_CONFESSION:
            console.log('like succcess')
            return state
        case UNLIKE_CONFESSION:
            console.log('unlike success')
            return state
        case DELETE_CONFESSION:
            console.log('delete confession success')
            return state
        case UPDATE_CONFESSION:
            console.log('update confession success')
            return state
        default:
            return state
    }
}