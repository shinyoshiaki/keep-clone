export interface StateUser {
  name?: string;
  session?: string;
  code?: string;
}

const initialState: StateUser = {};

export const doLogin = (name: string, session: string, code: string) => {
  const type = "UI_LOGIN" as "UI_LOGIN";
  return { type, payload: { name, session, code } };
};

type Actions = ReturnType<typeof doLogin>;

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case "UI_LOGIN": {
      return {
        ...state,
        ...action.payload
      } as StateUser;
    }
    default:
      return state;
  }
}
