import React, { FunctionComponent } from "react";
import { Modal } from "@material-ui/core";
import EditMol from "../edit";

const EditModalMol: FunctionComponent<{
  open: boolean;
  onClose: () => void;
  onChange: (v: { title: string; text: string }) => void;
  initial: { title: string; text: string };
}> = ({ open, onClose, initial, onChange }) => {
  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
      }}
    >
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
              onClose();
            }}
            menus={() => {}}
            initial={initial}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditModalMol;
