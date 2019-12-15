import { createAction } from "redux-actions";

export const POST_CREATE = "POST_CREATE";
export const POST_GET_LIST = "POST_GET_LIST";

console.log("posts actions POST_CREATE::::", POST_CREATE);

export const postCreate = createAction([POST_CREATE]);
export const postGetList = createAction([POST_GET_LIST]);
console.log("posts actions postGetList::::", postGetList(123));
