import React, { FunctionComponent } from "react";
import MemoOrgView from "./view";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { doPost } from "../../../modules/main";

interface Props {
  dispatch: Dispatch<any>;
}

const MemoOrg: FunctionComponent<Props> = ({ dispatch }) => {
  return (
    <MemoOrgView
      save={e =>
        doPost({ title: e.title, text: e.text, offline: true }, dispatch)
      }
    />
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main };
})(MemoOrg);
