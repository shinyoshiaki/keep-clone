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
import removepostApi from "../../../graphql/api/removepost";

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
  const edit = useApi(editpostApi);

  const editMemo = async (changed: Post) => {
    if (session) {
      if (!edit.loading) {
        await edit.fetch({
          memoCode: changed.code,
          token: session,
          ...changed
        });
      }
    }
    dispatch(doChange(changed));
  };

  const remove = useApi(removepostApi);

  const removeMemo = async (code: string) => {
    if (session && !remove.loading) {
      const res = await remove
        .fetch({ memoCode: code, token: session })
        .catch();
      if (!res) {
        console.log("network issue");
      }
    }
    dispatch(doRemove(code));
  };

  return (
    <CardListView
      posts={posts}
      searchWord={searchWord}
      viewTag={viewTag}
      onRemove={removeMemo}
      onChange={editMemo}
    />
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.ui, ...state.user };
})(CardListOrg);
