import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import TagButtonAtom from "../../atoms/tagButton";

const LabelListMol: FunctionComponent<{
  labels: string[];
  onClick: (v: string) => void;
  resetAll: () => void;
}> = ({ labels, onClick, resetAll }) => {
  return (
    <div style={{ width: 270 }}>
      <Typography style={{ padding: 10 }}>label</Typography>
      <TagButtonAtom label="all" onClick={() => resetAll()} />
      {labels.map((label, i) => (
        <TagButtonAtom label={label} onClick={onClick} key={i} />
      ))}
    </div>
  );
};

export default LabelListMol;
