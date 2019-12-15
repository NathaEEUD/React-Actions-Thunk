import { handleActions } from "redux-actions";
import { COMMENT_CREATE, COMMENT_GET_LIST } from "./actions";

export default handleActions(
  {
    [COMMENT_CREATE]: (state, action) => {
      return [...state, action.payload];
    },
    [COMMENT_GET_LIST]: (state, action) => {
      return action.payload;
    },
  },
  [],
);
