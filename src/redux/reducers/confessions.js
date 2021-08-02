import { CREATE_CONFESSION_SUCCESS, CREATE_CONFESSION_ERROR } from "../constants/confession"

export default (state=[], action) => {
    switch (action.type) {
        case CREATE_CONFESSION_SUCCESS:
            console.log(action.confession)
            return state
        case CREATE_CONFESSION_ERROR:
            console.log(action.error)
            return state
        default:
            return state
    }
}