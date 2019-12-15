import { createAction } from "redux-actions";
import api from "../../../server/api";

export const HANDLE_API_ERROR = "HANDLE_API_ERROR";
export const COMMENT_GET_LIST = "COMMENT_GET_LIST";
export const COMMENT_CREATE = "COMMENT_CREATE";

export const handleApiError = createAction(HANDLE_API_ERROR);
export const commentGetList = createAction(COMMENT_GET_LIST);
export const commentCreate = createAction(COMMENT_CREATE);

export const getComments = () => async (dispatch) => {
  try {
    const response = await api.comments.get();
    dispatch(commentGetList(response.data));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

export const createComment = (data) => async (dispatch) => {
  try {
    const response = await api.comments.create(data);
    dispatch(commentCreate(response.data));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};
