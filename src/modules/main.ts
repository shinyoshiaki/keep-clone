import { Action, Dispatch } from "redux";

export interface Post {
  hash: string;
  title: string;
  text: string;
  tag: string[];
  offline: boolean;
}

export interface State {
  posts: Post[];
}

const initialState: State = { posts: [] };

enum ActionName {
  POST = "MAIN_POST",
  REMOVE = "MAIN_REMOVE",
  CHANGE = "MAIN_CHANGE"
}

interface PostAction extends Action {
  type: ActionName.POST;
  payload: Post;
}

export const doPost = async (post: Post, dispatch: Dispatch<PostAction>) => {
  dispatch({ type: ActionName.POST, payload: post });
};

interface RemoveAction extends Action {
  type: ActionName.REMOVE;
  payload: string;
}

export const doRemove = async (
  hash: string,
  dispatch: Dispatch<RemoveAction>
) => {
  dispatch({ type: ActionName.REMOVE, payload: hash });
};

interface ChangeAction extends Action {
  type: ActionName.CHANGE;
  payload: { post: Post; newHash?: string };
}

export const doChange = async (
  post: Post,
  dispatch: Dispatch<ChangeAction>,
  newHash?: string
) => {
  dispatch({ type: ActionName.CHANGE, payload: { post, newHash } });
};

type Actions = PostAction | RemoveAction | ChangeAction;

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionName.POST: {
      action.payload.tag = action.payload.tag.filter(v => v !== "");
      return { ...state, posts: state.posts.concat(action.payload) } as State;
    }
    case ActionName.REMOVE: {
      return {
        ...state,
        posts: state.posts.filter(v => {
          if (v.hash !== action.payload) return v;
        })
      } as State;
    }
    case ActionName.CHANGE: {
      const next = state.posts.map(post => {
        if (post.hash === action.payload.post.hash) {
          const post = action.payload.post;
          if (action.payload.newHash) {
            post.hash = action.payload.newHash;
          }
          post.tag = post.tag.filter(v => v !== "");
          return post;
        } else return post;
      });
      return { ...state, posts: next } as State;
    }

    default:
      return state;
  }
}
