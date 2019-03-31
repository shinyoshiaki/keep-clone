import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State, doRemove, doChange, Post } from "../../../modules/main";
import { Dispatch } from "redux";
import { StateUi } from "../../../modules/ui";
import CardListView from "./view";
import { StateUser } from "../../../modules/user";
import { useApi } from "../../../hooks/useApi";
import editpostApi from "../../../graphql/api/editpost";

interface Props extends State, StateUi, StateUser {
  dispatch: Dispatch<any>;
}

const CardListOrg: FunctionComponent<Props> = ({
  posts,
  dispatch,
  viewTag,
  searchWord,
  session
}) => {
  const { loading, fetch } = useApi(editpostApi);

  const editMemo = async (changed: Post) => {
    if (session) {
      if (!loading) {
        await fetch({ memoCode: changed.code, token: session, ...changed });
      }
    }
    dispatch(doChange(changed));
  };

  return (
    <CardListView
      posts={posts}
      searchWord={searchWord}
      viewTag={viewTag}
      onRemove={hash => dispatch(doRemove(hash))}
      onChange={editMemo}
    />
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.ui, ...state.user };
})(CardListOrg);
