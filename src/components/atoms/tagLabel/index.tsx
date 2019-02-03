import React, { FunctionComponent } from "react";

const TagLabelAtom: FunctionComponent<{ label: string }> = ({ label }) => {
  return (
    <div
      style={{
        borderRadius: 10,
        backgroundColor: "#EBEBEB",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        display: "inline-block",
        fontSize: 11
      }}
    >
      {label}
    </div>
  );
};

export default TagLabelAtom;
