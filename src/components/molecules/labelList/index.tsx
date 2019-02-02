import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import TagLabelAtom from "../../atoms/taglabel";
import { Edit } from "@material-ui/icons";

const LabelListMol: FunctionComponent<{
  labels: string[];
  onClick: (v: string) => void;
}> = ({ labels, onClick }) => {
  return (
    <div>
      <Typography style={{ padding: 10 }}>label</Typography>
      {labels.map(label => (
        <TagLabelAtom label={label} onClick={onClick} />
      ))}
      <div style={{ display: "flex", padding: 10 }}>
        <Edit
          style={{
            paddingRight: 30,
            color: "gray"
          }}
        />
        {"edit label"}
      </div>
    </div>
  );
};

export default LabelListMol;
