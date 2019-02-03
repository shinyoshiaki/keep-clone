import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { doPost } from "../../../modules/main";
import { IconButton, Typography } from "@material-ui/core";
import EditMol from "../../../components/molecules/edit";
import useObject from "useobject";
import { More } from "@material-ui/icons";
import EditLabelMol from "../../../components/molecules/editLabel";

interface Props {
  dispatch: Dispatch<any>;
}

const MemoOrg: FunctionComponent<Props> = ({ dispatch }) => {
  const { state, setState } = useObject({
    open: false,
    editLabel: false,
    tag: [] as string[]
  });
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
          initial={{ title: "", text: "", tag: state.tag }}
          menus={() => (
            <div>
              <IconButton
                style={{ width: 50, height: 50 }}
                onClick={() =>
                  setState(prev => {
                    return { editLabel: !prev.editLabel };
                  })
                }
              >
                <More />
              </IconButton>
            </div>
          )}
          options={() => (
            <div>
              {state.editLabel && (
                <EditLabelMol
                  tagList={["test"]}
                  selected={v =>
                    setState(prev => {
                      return { tag: prev.tag.concat(v) };
                    })
                  }
                  unSelected={v =>
                    setState(prev => {
                      const next = prev.tag.filter(label => {
                        if (label !== v) return label;
                      });
                      return { tag: next };
                    })
                  }
                />
              )}
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
