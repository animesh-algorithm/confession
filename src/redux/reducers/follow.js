import { FOLLOW_SUCCESS, FOLLOW_ERROR } from "../constants/follow"

const initState = {
    follow: {followError: null}
}

export default (state=initState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            console.log('Follow Success')
            return {
                ...state,
                followError: null
            }
        case FOLLOW_ERROR:
            console.log('Follow error')
            return {
                ...state,
                followError: action.error
            }
        default:
            return state
    }
}