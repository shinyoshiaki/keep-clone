import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { doPost, State } from "../../../modules/main";
import { Typography } from "@material-ui/core";
import EditMol from "../../../components/molecules/edit";
import useObject from "useobject";

import { StateUser } from "../../../modules/user";

interface Props extends State, StateUser {
  dispatch: Dispatch<any>;
}

const MemoOrg: FunctionComponent<Props> = ({
  dispatch,
  posts,
  session,
  code
}) => {
  const { state, setState } = useObject({ open: false });

  const allTag: string[] = posts.flatMap(post => {
    if (post.tag.length > 0) return post.tag;
    else return [] as string[];
  });

  const onSubmit = (title: string, text: string, tag: string[]) => {};

  return (
    <div>
      {state.open ? (
        <EditMol
          onClose={e => {
            const { text, title, tag } = e;
            if (text.length > 0 || title.length > 0) {
              onSubmit(title, text, tag);
            }
            setState({ open: false });
          }}
          initial={{ title: "", text: "", tag: [] }}
          allTag={allTag}
        />
      ) : (
        <div
          style={{
            display: "flex",
            borderRadius: 5,
            boxShadow: "0 0 4px gray"
          }}
          onClick={() => setState({ open: true })}
        >
          <Typography style={{ padding: 10 }}>{"メモを入力..."}</Typography>
        </div>
      )}
    </div>
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(MemoOrg);
