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

// export default (state = [], action) => {
//   switch (action.type) {
//     case "action_1":
//       return [1, 2, 3];

//     case "action_2":
//       return [4, 5, 6];

//     default:
//       return state;
//   }
// };
