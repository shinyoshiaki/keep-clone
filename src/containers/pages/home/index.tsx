import React, { FunctionComponent, useEffect } from "react";

import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { State, doPost, doChange } from "../../../modules/main";
import { StateUser } from "../../../modules/user";
import HomeView from "./view";
import { useApi } from "../../../hooks/useApi";
import allPostApi from "../../../graphql/api/allpost";

interface Props extends State, StateUser {
  dispatch: Dispatch;
}

const Home: FunctionComponent<Props> = ({ posts, session, code, dispatch }) => {
  const { loading, fetch } = useApi(allPostApi);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (session) {
      if (!loading) {
        const res = await fetch({ token: session }).catch();
        if (res) {
          console.log({ res });
          res.forEach(memo => {
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
