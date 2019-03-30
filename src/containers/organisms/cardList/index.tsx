import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State, doRemove, doChange } from "../../../modules/main";
import { Dispatch } from "redux";
import { StateUi } from "../../../modules/ui";
import CardListView from "./view";

interface Props extends State, StateUi {
  dispatch: Dispatch<any>;
}

const CardListOrg: FunctionComponent<Props> = ({
  posts,
  dispatch,
  viewTag,
  searchWord
}) => {
  return (
    <CardListView
      posts={posts}
      searchWord={searchWord}
      viewTag={viewTag}
      onRemove={hash => dispatch(doRemove(hash))}
      onChange={changed => dispatch(doChange(changed))}
    />
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.ui };
})(CardListOrg);
