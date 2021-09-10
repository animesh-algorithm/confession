import { GET_USERS, UPDATE_PROFILE } from "../constants/users";

const initState = {
  users: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.snapshots,
      };
    case UPDATE_PROFILE:
      return state;
    default:
      return state;
  }
};
