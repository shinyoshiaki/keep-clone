import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import useObject from "useobject";
import EditMol from "../../../components/molecules/edit";

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
        <EditMol onClose={() => setState({ open: false })} />
      ) : (
        <ThumbView handle={() => setState({ open: true })} />
      )}
    </div>
  );
};

export default MemoOrg;
