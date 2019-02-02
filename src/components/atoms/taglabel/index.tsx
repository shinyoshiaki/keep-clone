import React, { FunctionComponent } from "react";
import { Label } from "@material-ui/icons";

const TagLabelAtom: FunctionComponent<{
  label: string;
  onClick: (v: string) => void;
}> = ({ label, onClick }) => {
  return (
    <li style={{ display: "flex", padding: 10 }} onClick={() => onClick(label)}>
      <Label
        style={{
          paddingRight: 30,
          color: "gray"
        }}
      />
      {label}
    </li>
  );
};

export default TagLabelAtom;
