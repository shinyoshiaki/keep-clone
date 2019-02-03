import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { doPost, State } from "../../../modules/main";
import { Typography } from "@material-ui/core";
import EditMol from "../../../components/molecules/edit";
import useObject from "useobject";

interface Props extends State {
  dispatch: Dispatch<any>;
}

const MemoOrg: FunctionComponent<Props> = ({ dispatch, posts }) => {
  const { state, setState } = useObject({ open: false });
  const allTag: string[] = posts.flatMap(post => {
    if (post.tag.length > 0) return post.tag;
    else return [] as string[];
  });

  return (
    <div>
      {state.open ? (
        <EditMol
          onClose={e => {
            console.log("input", e);
            if (e.text.length > 0 || e.title.length > 0) {
              doPost(
                {
                  title: e.title,
                  text: e.text,
                  offline: true,
                  tag: e.tag,
                  id: Math.random().toString()
                },
                dispatch
              );
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
  return { ...state.main };
})(MemoOrg);
