import { Action, Dispatch } from "redux";

export interface StateUser {
  name?: string;
  session?: string;
  code?: string;
}

const initialState: StateUser = {};

enum ActionName {
  SIGNUP = "UI_SIGNUP",
  LOGIN = "UI_LOGIN"
}

interface SignUpAction extends Action {
  type: ActionName.SIGNUP;
  payload: { name: string; code: string };
}

interface LoginAction extends Action {
  type: ActionName.LOGIN;
  payload: { name: string; session: string; code: string };
}

type Actions = SignUpAction | LoginAction;

export const doSignUp = (
  name: string,
  code: string,
  dispatch: Dispatch<SignUpAction>
) => {
  dispatch({ type: ActionName.SIGNUP, payload: { name, code } });
};

export const doLogin = (
  name: string,
  session: string,
  code: string,
  dispatch: Dispatch<LoginAction>
) => {
  dispatch({ type: ActionName.LOGIN, payload: { name, session, code } });
};

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionName.SIGNUP: {
      return {
        ...state,
        ...action.payload
      } as StateUser;
    }
    case ActionName.LOGIN: {
      return {
        ...state,
        ...action.payload
      } as StateUser;
    }
    default:
      return state;
  }
}
