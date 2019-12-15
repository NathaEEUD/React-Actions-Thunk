import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const logger = (store) => (next) => (action) => {
  console.log("logger action::::", action);
  next(action);
};

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
