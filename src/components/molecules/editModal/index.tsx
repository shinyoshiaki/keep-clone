import React, { FunctionComponent } from "react";
import { Modal } from "@material-ui/core";
import EditMol, { Props as EditMolProps } from "../edit";

interface Props extends EditMolProps {
  open: boolean;
}

const EditModalMol: FunctionComponent<Props> = ({
  open,
  initial,
  onEdited,
  allTag,
  menus,
  onClose
}) => {
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
            onEdited={onEdited}
            initial={initial}
            allTag={allTag}
            menus={menus}
            onClose={onClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditModalMol;
