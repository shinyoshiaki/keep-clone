import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import logger from "redux-logger";
import main, { State } from "./main";
import ui, { StateUi } from "./ui";
import user, { StateUser } from "./user";
import { persist } from "./middleware/persist";

const rootReducer = combineReducers({
  main,
  ui,
  user
});

export default function createStore() {
  const store = reduxCreateStore(
    rootReducer,
    applyMiddleware(logger, persist())
  );
  return { store };
}

export interface ReduxState {
  main: State;
  ui: StateUi;
  user: StateUser;
}
