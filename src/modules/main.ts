import { Action, Dispatch } from "redux";

export interface Post {
  title: string;
  text: string;
  offline: boolean;
}

export interface State {
  posts: Post[];
}

const initialState: State = { posts: [] };

enum ActionName {
  POST = "STATE_POST"
}

interface PostAction extends Action {
  type: ActionName.POST;
  payload: Post;
}

export const doPost = async (post: Post, dispatch: Dispatch<PostAction>) => {
  dispatch({ type: ActionName.POST, payload: post });
};

type Actions = PostAction;

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionName.POST: {
      return { ...state, posts: state.posts.concat(action.payload) } as State;
    }
    default:
      return state;
  }
}
