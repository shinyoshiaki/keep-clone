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

export const doPost = (post: Post) => {
  return { type: "MAIN_POST" as "MAIN_POST", payload: post };
};

export const doRemove = (hash: string) => {
  return { type: "MAIN_REMOVE" as "MAIN_REMOVE", payload: hash };
};

export const doChange = (post: Post, newHash?: string) => {
  return {
    type: "MAIN_CHANGE" as "MAIN_CHANGE",
    payload: { post, newHash }
  };
};

type Actions =
  | ReturnType<typeof doPost>
  | ReturnType<typeof doRemove>
  | ReturnType<typeof doChange>;

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case "MAIN_POST": {
      action.payload.tag = action.payload.tag.filter(v => v !== "");
      return { ...state, posts: state.posts.concat(action.payload) } as State;
    }
    case "MAIN_REMOVE": {
      return {
        ...state,
        posts: state.posts.filter(v => {
          if (v.hash !== action.payload) return v;
        })
      } as State;
    }
    case "MAIN_CHANGE": {
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
