import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from "../constants/comments";

const initState = {
  comment: {
    commentError: null,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      console.log("comment success");
      return {
        ...state,
        commentError: null,
      };
    case DELETE_COMMENT:
      console.log("delete comment success");
      return state;
    case EDIT_COMMENT:
      console.log("edit confession success");
      return state;
    default:
      return state;
  }
};
