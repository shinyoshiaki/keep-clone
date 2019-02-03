import React, { FunctionComponent } from "react";
import { InputBase } from "@material-ui/core";

import CheckboxAtom from "../../atoms/checkbox";

const EditLabelMol: FunctionComponent<{
  tagList: string[];
  selected: (tag: string) => void;
  unSelected?: (tag: string) => void;
}> = ({ tagList, selected, unSelected }) => {
  return (
    <div>
      <InputBase placeholder="input label" />
      <div style={{ display: "flex" }}>
        {tagList.map(tag => (
          <CheckboxAtom
            label={tag}
            onChange={b => {
              if (b) {
                selected(tag);
              } else {
                if (unSelected) unSelected(tag);
              }
            }}
            key={tag}
          />
        ))}
      </div>
    </div>
  );
};

export default EditLabelMol;
