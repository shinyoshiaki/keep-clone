import React, { FunctionComponent } from "react";
import { InputBase } from "@material-ui/core";

import CheckboxAtom from "../../atoms/checkbox";

const EditLabelMol: FunctionComponent<{ tagList: string[] }> = ({
  tagList
}) => {
  return (
    <div>
      <InputBase placeholder="input label" />
      <div style={{ display: "flex" }}>
        {tagList.map(tag => (
          <CheckboxAtom label={tag} onChange={() => {}} key={tag} />
        ))}
      </div>
    </div>
  );
};

export default EditLabelMol;
