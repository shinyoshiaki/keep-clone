import React, { FunctionComponent } from "react";
import { Checkbox } from "@material-ui/core";

const CheckboxAtom: FunctionComponent<{
  onChange: (b: boolean) => void;
  label: string;
  style?: React.CSSProperties;
}> = ({ onChange, label, style }) => {
  return (
    <div style={style}>
      <Checkbox
        onChange={(_, checked) => {
          onChange(checked);
        }}
      />
      {label}
    </div>
  );
};

export default CheckboxAtom;
