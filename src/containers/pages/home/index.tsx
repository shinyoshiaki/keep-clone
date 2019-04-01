import React, { FunctionComponent, useEffect } from "react";

import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { State, doPost, Post } from "../../../modules/main";
import { StateUser } from "../../../modules/user";
import HomeView from "./view";
import { useApi } from "../../../hooks/useApi";
import allPostApi from "../../../graphql/api/allpost";
import postApi from "../../../graphql/api/post";

interface Props extends State, StateUser {
  dispatch: Dispatch;
}

const Home: FunctionComponent<Props> = ({ posts, session, dispatch }) => {
  const { loading, fetch } = useApi(allPostApi);

  useEffect(() => {
    init();
  }, []);

  const upload = async (memos: Post[]) => {
    for (let post of posts) {
      const exist = memos.find(memo => post.code === memo.code);
      if (!exist) {
        await postApi({ token: session!, ...post });
      } else {
        if (Number(post.time) > Number(exist.time))
          await postApi({ token: session!, ...post });
      }
    }
  };

  const init = async () => {
    if (session) {
      if (!loading) {
        const memos = await fetch({ token: session }).catch();
        if (memos) {
          upload(memos);

          memos.forEach(memo => {
            const exist = posts.find(post => post.code === memo.code);
            if (!exist) {
              dispatch(doPost(memo));
            }
          });
        }
      }
    }
  };

  return <HomeView />;
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(Home);
