import React, { FunctionComponent, useEffect } from "react";
import MemoOrg from "../containers/organisms/memo";
import CardListOrg from "../containers/organisms/cardList";
import LayoutOrg from "../containers/organisms/layout";
import { connect } from "react-redux";
import { ReduxState } from "../modules/createStore";
import { Dispatch } from "redux";
import { State, doPost, doChange } from "../modules/main";
import { StateUser } from "../modules/user";

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

  return (
    <LayoutOrg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ padding: 30, width: 600, maxWidth: "90vw" }}>
          <MemoOrg />
        </div>
      </div>
      <CardListOrg />
    </LayoutOrg>
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(Home);
