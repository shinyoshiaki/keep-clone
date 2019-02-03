import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import TagButtonAtom from "../../atoms/tagButton";

const LabelListMol: FunctionComponent<{
  labels: string[];
  onClick: (v: string) => void;
}> = ({ labels, onClick }) => {
  return (
    <div style={{ width: 270 }}>
      <Typography style={{ padding: 10 }}>label</Typography>
      {labels.map((label, i) => (
        <TagButtonAtom label={label} onClick={onClick} key={i} />
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
