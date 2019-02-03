import React, { FunctionComponent } from "react";
import { Modal } from "@material-ui/core";
import EditMol, { EditInput } from "../edit";

const EditModalMol: FunctionComponent<{
  open: boolean;
  onChange: (v: EditInput) => void;
  allTag: string[];
  initial: { title: string; text: string; tag: string[] };
}> = ({ open, initial, onChange, allTag }) => {
  return (
    <Modal open={open}>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ width: 600, maxWidth: "90vw", backgroundColor: "white" }}>
          <EditMol
            onClose={v => {
              onChange(v);
            }}
            initial={initial}
            allTag={allTag}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditModalMol;
