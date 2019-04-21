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
import AuthApi from "../../../graphql/api/auth";
import { History } from "history";

interface Props extends State, StateUser {
  dispatch: Dispatch;
  history: History;
}

const Home: FunctionComponent<Props> = ({
  posts,
  session,
  dispatch,
  history
}) => {
  const authApi = useApi(AuthApi);
  const { loading, fetch } = useApi(allPostApi);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (session) {
      const live = await authApi.fetch({ token: session }).catch();
      if (!live) {
        history.push("login");
        return;
      }
      console.log("logined", live);

      if (!loading) {
        const memos = await fetch({ token: session }).catch();
        console.log({ memos });
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

  return <HomeView />;
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(Home);
