import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { doPost } from "../../../modules/main";
import { IconButton, Typography } from "@material-ui/core";
import EditMol from "../../../components/molecules/edit";
import useObject from "useobject";
import { More } from "@material-ui/icons";

interface Props {
  dispatch: Dispatch<any>;
}

const MemoOrg: FunctionComponent<Props> = ({ dispatch }) => {
  const { state, setState } = useObject({ open: false });
  return (
    <div>
      {state.open ? (
        <EditMol
          onClose={e => {
            setState({ open: false });
            if (e.text.length > 0) {
              doPost(
                {
                  title: e.title,
                  text: e.text,
                  offline: true,
                  tag: [],
                  id: Math.random().toString()
                },
                dispatch
              );
            }
          }}
          menus={() => (
            <div>
              <IconButton style={{ width: 50, height: 50 }}>
                <More />
              </IconButton>
            </div>
          )}
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
