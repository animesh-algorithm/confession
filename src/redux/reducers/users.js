import { GET_USERS } from "../constants/users"

const initState = {
    users: []
}

export default (state=initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.snapshots
            }
        default:
            return state
    }
}