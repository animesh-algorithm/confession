import { CREATE_COMMENT } from "../constants/comments"

const initState = {
    comment: {
        commentError: null
    }
}

export default (state=initState, action) => {
    switch (action.type) {
        case CREATE_COMMENT:
            console.log('comment success')
            return {
                ...state,
                commentError: null
            }
        default:
            return state
    }
}