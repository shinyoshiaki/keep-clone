import React, { FunctionComponent } from "react";
import { InputBase, Button } from "@material-ui/core";

const EditMol: FunctionComponent<{ onClose: () => void }> = ({ onClose }) => {
  return (
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
        <Button style={{ margin: 10 }} onClick={() => onClose()}>
          close
        </Button>
      </div>
    </div>
  );
};

export default EditMol;
