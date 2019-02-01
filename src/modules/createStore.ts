import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import main, { State } from "./main";

const rootReducer = combineReducers({
  main
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["main"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function createStore() {
  const store = reduxCreateStore(persistedReducer, applyMiddleware(logger));
  return { store, persistor: persistStore(store) };
}

export interface ReduxState {
  main: State;
}
