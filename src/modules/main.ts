export interface Post {
  time: string;
  code: string;
  title: string;
  text: string;
  tag: string[];
}

export interface State {
  posts: Post[];
}

const initialState: State = { posts: [] };

export const doPost = (post: Post) => {
  return { type: "MAIN_POST" as const, payload: post };
};

export const doRemove = (code: string) => {
  return { type: "MAIN_REMOVE" as const, payload: code };
};

export const doChange = (post: Post, newTime?: string) => {
  return {
    type: "MAIN_CHANGE" as const,
    payload: { post, newTime }
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
          if (v.code !== action.payload) return v;
        })
      } as State;
    }
    case "MAIN_CHANGE": {
      const next = state.posts.map(post => {
        if (post.time === action.payload.post.time) {
          const post = action.payload.post;
          if (action.payload.newTime) {
            post.time = action.payload.newTime;
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
