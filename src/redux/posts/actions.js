import { createAction } from "redux-actions";
import api from "../../../server/api";

export const HANDLE_API_ERROR = "HANDLE_API_ERROR";
export const POST_GET_LIST = "POST_GET_LIST";
export const POST_CREATE = "POST_CREATE";

export const handleApiError = createAction(HANDLE_API_ERROR);
export const postGetList = createAction(POST_GET_LIST);
export const postCreate = createAction(POST_CREATE);

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.posts.get();
    dispatch(postGetList(response.data));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

export const createPost = (data) => async (dispatch) => {
  try {
    const response = await api.posts.create(data);
    dispatch(postCreate(response.data));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};
