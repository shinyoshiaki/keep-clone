import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import useObject from "useobject";
import EditMol, { EditInput } from "../../../components/molecules/edit";

const MemoOrgView: FunctionComponent<{ save: (input: EditInput) => void }> = ({
  save
}) => {
  const { state, setState } = useObject({ open: false });
  return (
    <div>
      {state.open ? (
        <EditMol
          onClose={e => {
            setState({ open: false });
            save(e);
          }}
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

export default MemoOrgView;
