import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { doPost, State } from "../../../modules/main";
import useObject from "useobject";

import { StateUser } from "../../../modules/user";
import MemoView from "./view";

interface Props extends State, StateUser {
  dispatch: Dispatch<any>;
}

const MemoOrg: FunctionComponent<Props> = ({ dispatch, posts, session }) => {
  const allTag: string[] = posts.flatMap(post => {
    if (post.tag.length > 0) return post.tag;
    else return [] as string[];
  });

  const onSubmit = (title: string, text: string, tag: string[]) => {};

  return <MemoView onSubmit={onSubmit} allTag={allTag} />;
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(MemoOrg);
