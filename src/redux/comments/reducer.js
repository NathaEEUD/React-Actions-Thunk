import { handleActions } from "redux-actions";
import { COMMENT_ACTION_1, COMMENT_ACTION_2 } from "../actions";

export default handleActions(
  {
    ACTION_1: (state, action) => {
      return [1, 2, 3];
    },
    [COMMENT_ACTION_2]: (state, action) => {
      return [4, 5, 6];
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
