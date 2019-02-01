import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import logger from "redux-logger";

import main, { State } from "./main";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({ main }),
    applyMiddleware(logger)
  );
  return store;
}

export interface ReduxState {
  main: State;
}
