import axios from "axios";

const requestHelper = axios.create({
  baseURL: "http://localhost:4000",
});

export default {
  comments: {
    get: () =>
      requestHelper({
        url: "comments",
        method: "get",
      }),
    create: data =>
      requestHelper({
        url: "comments",
        method: "post",
        data,
      }),
  },
  posts: {
    get: () =>
      requestHelper({
        url: "posts",
        method: "get",
      }),
    create: data =>
      requestHelper({
        url: "posts",
        method: "post",
        data,
      }),
  },
};
