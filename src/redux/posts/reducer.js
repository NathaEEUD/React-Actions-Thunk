import { handleActions } from "redux-actions";
import { POST_CREATE, POST_GET_LIST } from "./actions";

export default handleActions(
  {
    [POST_CREATE]: (state, action) => {
      return [...state, action.payload];
    },
    [POST_GET_LIST]: (state, action) => {
      console.log("action::::", action);
      return action.payload;
    },
  },
  [],
);
