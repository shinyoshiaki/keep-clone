import { MiddlewareAPI, Middleware, Dispatch, Store } from "redux";
import localforage from "localforage";

localforage.config({ driver: localforage.INDEXEDDB });

const keyList: { [key: string]: boolean } = {};

export const persist = () => {
  const loggerMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
    next: Dispatch
  ) => async action => {
    const returnValue = next(action);

    for (let key of Object.keys(getState())) {
      console.log({ key });
      keyList[key] = true;
      await localforage.setItem(key, JSON.stringify(getState()[key]));
    }

    await localforage.setItem("root", JSON.stringify(keyList));

    console.log({ returnValue }, getState());

    return returnValue;
  };

  return loggerMiddleware;
};

interface Option {
  whitelist: string[];
}

export const loadPersist = async (store: Store, opt: Partial<Option> = {}) => {
  try {
    const root: any = await localforage.getItem("root");
    console.log({ root });
    for (let key of Object.keys(JSON.parse(root))) {
      console.log({ key });
      try {
        const state = store.getState()[key];
        const value: any = await localforage.getItem(key);

        console.log({ value });

        if (opt.whitelist) {
          if (opt.whitelist.includes(key))
            store.getState()[key] = {
              ...state,
              ...JSON.parse(value)
            };
        } else {
          store.getState()[key] = {
            ...state,
            ...JSON.parse(value)
          };
        }
      } catch (error) {}
    }
  } catch (error) {}
};
