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
  payload: { name: string; session: string };
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
  dispatch: Dispatch<LoginAction>
) => {
  dispatch({ type: ActionName.LOGIN, payload: { name, session } });
};

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionName.SIGNUP: {
      return {
        ...state,
        name: action.payload.name,
        code: action.payload.code
      } as StateUser;
    }
    case ActionName.LOGIN: {
      return {
        ...state,
        name: action.payload.name,
        session: action.payload.session
      } as StateUser;
    }
    default:
      return state;
  }
}
