import React, { FunctionComponent, useEffect } from "react";
import { InputBase } from "@material-ui/core";

import CheckboxAtom from "../../atoms/checkbox";
import useObject from "useobject";

const EditLabelMol: FunctionComponent<{
  tagList: string[];
  selected: (tag: string) => void;
  unSelected?: (tag: string) => void;
}> = ({ tagList, selected, unSelected }) => {
  const { state, setState } = useObject({
    tagList: [] as string[],
    newTag: ""
  });

  useEffect(() => {
    setState(prev => {
      return { tagList: Array.from(new Set([...tagList, ...prev.tagList])) };
    });
  }, [tagList]);

  return (
    <div>
      <InputBase
        placeholder="input label"
        onChange={e => setState({ newTag: e.target.value })}
        value={state.newTag}
        onKeyPress={ev => {
          if (ev.key === "Enter") {
            setState(prev => {
              return {
                tagList: Array.from(new Set([prev.newTag, ...prev.tagList])),
                newTag: ""
              };
            });
          }
        }}
      />
      <div style={{ display: "flex" }}>
        {state.tagList.map(tag => (
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
