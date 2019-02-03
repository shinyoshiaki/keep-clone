import { Action, Dispatch } from "redux";

export interface StateUi {
  viewTag: string;
  searchWord: string;
}

const initialState: StateUi = { viewTag: "", searchWord: "" };

enum ActionName {
  SET_VIEWTAG = "UI_SET_VIEWTAG",
  SET_SEARCH = "UI_SET_SEARCH"
}

interface SetViewTagAction extends Action {
  type: ActionName.SET_VIEWTAG;
  payload: string | undefined;
}

export const doSetViewTag = async (
  tag: string | undefined,
  dispatch: Dispatch<SetViewTagAction>
) => {
  dispatch({ type: ActionName.SET_VIEWTAG, payload: tag });
};

interface SetSearchAction extends Action {
  type: ActionName.SET_SEARCH;
  payload: string | undefined;
}

export const doSetSearch = async (
  search: string | undefined,
  dispatch: Dispatch<SetSearchAction>
) => {
  dispatch({ type: ActionName.SET_SEARCH, payload: search });
};

type Actions = SetViewTagAction | SetSearchAction;

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionName.SET_VIEWTAG: {
      return { ...state, viewTag: action.payload } as StateUi;
    }
    case ActionName.SET_SEARCH: {
      return { ...state, searchWord: action.payload } as StateUi;
    }
    default:
      return state;
  }
}
