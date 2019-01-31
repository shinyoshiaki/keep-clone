import React, { FunctionComponent } from "react";
import { Typography, InputBase, Button } from "@material-ui/core";
import useObject from "useobject";

const ThumbView: FunctionComponent<{ handle: () => void }> = ({ handle }) => (
  <div
    style={{ display: "flex", borderRadius: 5, boxShadow: "0 0 4px gray" }}
    onClick={handle}
  >
    <Typography style={{ padding: 10 }}>{"メモを入力..."}</Typography>
  </div>
);

const MemoOrg: FunctionComponent = () => {
  const { state, setState } = useObject({ open: false });
  return (
    <div>
      {state.open ? (
        <div style={{ borderRadius: 5, boxShadow: "0 0 4px gray" }}>
          <div>
            <InputBase
              placeholder="title"
              style={{
                width: "100%",
                padding: 10
              }}
            />{" "}
          </div>
          <InputBase
            placeholder="input"
            multiline
            rows={2}
            rowsMax={30}
            style={{
              width: "97%",
              padding: 10,
              paddingBottom: 20,
              overflowY: "auto"
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ margin: 10 }}
              onClick={() => setState({ open: false })}
            >
              close
            </Button>
          </div>
        </div>
      ) : (
        <ThumbView handle={() => setState({ open: true })} />
      )}
    </div>
  );
};

export default MemoOrg;
