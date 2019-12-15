import { createAction } from "redux-actions";

export const COMMENT_CREATE = "COMMENT_CREATE";
export const COMMENT_GET_LIST = "COMMENT_GET_LIST";

export const commentCreate = createAction([COMMENT_CREATE]);
export const commentGetList = createAction([COMMENT_GET_LIST]);

// export const createComment = () => ({
//   type: COMMENT_ACTION_1,
//   payload: [10, 11, 12],
// });
