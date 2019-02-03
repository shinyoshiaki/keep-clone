import React, { FunctionComponent } from "react";
import HeaderMol from "../../../components/molecules/header";
import LabelListMol from "../../../components/molecules/labelList";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State } from "../../../modules/main";
import { Dispatch } from "redux";
import { doSetSearch, doSetViewTag } from "../../../modules/ui";

interface Props extends State {
  dispatch: Dispatch<any>;
}

const LayoutOrg: FunctionComponent<Props> = ({ children, posts, dispatch }) => {
  const allTag: string[] = Array.from(
    new Set(
      posts.flatMap(post => {
        if (post.tag.length > 0) return post.tag;
        else return [] as string[];
      })
    )
  );
  console.log({ allTag });
  return (
    <div style={{ minHeight: "95vh" }}>
      <HeaderMol
        enterSearch={word => {
          doSetSearch(word, dispatch);
        }}
        drawer={close => (
          <LabelListMol
            labels={allTag}
            onClick={tag => {
              doSetViewTag(tag, dispatch);
              close();
            }}
            resetAll={() => {
              doSetViewTag(undefined, dispatch);
              close();
            }}
          />
        )}
      />
      {children}
    </div>
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main };
})(LayoutOrg);
