import React, { FunctionComponent, useEffect } from "react";

import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { State, doPost, doChange } from "../../../modules/main";
import { StateUser } from "../../../modules/user";
import HomeView from "./view";

interface Props extends State, StateUser {
  dispatch: Dispatch;
}

const Home: FunctionComponent<Props> = ({ posts, session, code, dispatch }) => {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (session) {
    }
  };

  return <HomeView />;
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(Home);
