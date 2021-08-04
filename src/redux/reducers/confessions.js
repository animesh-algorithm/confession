import { CREATE_CONFESSION_SUCCESS, CREATE_CONFESSION_ERROR, GET_CONFESSION, LIKE_CONFESSION, UNLIKE_CONFESSION } from "../constants/confession"

export default (state=[], action) => {
    switch (action.type) {
        case CREATE_CONFESSION_SUCCESS:
            console.log(action.confession)
            return state
        case CREATE_CONFESSION_ERROR:
            console.log(action.error)
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
        default:
            return state
    }
}