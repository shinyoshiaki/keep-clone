import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { doPost, State } from "../../../modules/main";
import { StateUser } from "../../../modules/user";
import MemoView from "./view";
import { useApi } from "../../../hooks/useApi";
import PostApi from "../../../graphql/api/post";

interface Props extends State, StateUser {
  dispatch: Dispatch<any>;
}

const MemoOrg: FunctionComponent<Props> = ({ dispatch, posts, session }) => {
  const { loading, fetch, error } = useApi(PostApi);

  const allTag: string[] = posts.flatMap(post => {
    if (post.tag.length > 0) return post.tag;
    else return [] as string[];
  });

  const onSubmit = async (title: string, text: string, tag: string[]) => {
    if (!loading) {
      let hash = Math.random().toString();
      if (session) {
        const res = await fetch({ title, text, token: session, tag });
        console.log("MemoOrg", { res });
        if (res) {
          hash = res.hash;
        }
      }
      dispatch(doPost({ title, text, tag, hash }));
    }
  };

  return <MemoView onSubmit={onSubmit} allTag={allTag} />;
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(MemoOrg);
