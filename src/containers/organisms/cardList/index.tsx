import React, { FunctionComponent } from "react";
import CardListView from "./view";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State, doRemove } from "../../../modules/main";
import { Dispatch } from "redux";

interface Props extends State {
  dispatch: Dispatch<any>;
}

const CardListOrg: FunctionComponent<Props> = ({ posts, dispatch }) => {
  return (
    <CardListView
      cards={posts}
      onRemove={id => {
        doRemove(id, dispatch);
      }}
    />
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main };
})(CardListOrg);
