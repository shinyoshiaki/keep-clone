import React, { FunctionComponent, useEffect } from "react";
import { InputBase, Button, IconButton } from "@material-ui/core";
import useObject from "useobject";
import { Star, More } from "@material-ui/icons";
import TagLabelAtom from "../../atoms/tagLabel";
import EditLabelMol from "../editLabel";

export interface EditInput {
  title: string;
  text: string;
  tag: string[];
}

const initialState = {
  title: "",
  text: "",
  tag: [] as string[],
  editLabel: false
};

const EditMol: FunctionComponent<{
  onEdited: (input: EditInput) => void;
  menus?: () => any;
  allTag: string[];
  initial?: { title: string; text: string; tag: string[] };
}> = ({ onEdited, menus, initial, allTag }) => {
  const { state, setState } = useObject(initialState);

  useEffect(() => {
    console.log({ initial });
    if (initial) {
      const { title, text, tag } = initial;
      setState({ title, text, tag });
    }
  }, [initial]);

  return (
    <div
      style={{
        borderRadius: 5,
        boxShadow: "0 0 4px gray",
        display: "grid",
        gridTemplateColumns: "1.6fr 0.2fr",
        gridTemplateRows: "auto auto auto auto auto",
        gridTemplateAreas: `"title star" "text text" "tag tag" "menu close" "option option"`
      }}
    >
      <div style={{ gridArea: "title" }}>
        <InputBase
          placeholder="title"
          style={{
            width: "100%",
            padding: 10
          }}
          onChange={e => setState({ title: e.target.value })}
          value={state.title}
        />
      </div>
      <div
        style={{
          gridArea: "star",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <IconButton>
          <Star />
        </IconButton>
      </div>
      <div style={{ gridArea: "text" }}>
        <InputBase
          placeholder="input"
          multiline
          rows={2}
          rowsMax={30}
          style={{
            width: "97%",
            padding: 10,
            paddingBottom: 20,
            overflowY: "auto"
          }}
          onChange={e => setState({ text: e.target.value })}
          value={state.text}
        />
      </div>
      <div style={{ gridArea: "tag" }}>
        {state.tag.map(label => (
          <TagLabelAtom label={label} key={label} />
        ))}
      </div>
      <div style={{ gridArea: "menu", display: "flex" }}>
        <IconButton
          style={{ width: 50, height: 50 }}
          onClick={() =>
            setState(prev => {
              return { editLabel: !prev.editLabel };
            })
          }
        >
          <More />
        </IconButton>
        {menus && menus()}
      </div>
      <div style={{ gridArea: "close" }}>
        <Button
          onClick={() => {
            if (state.text.length > 0 || state.title.length > 0) {
              onEdited(state);
              setState(initialState);
            }
          }}
        >
          close
        </Button>
      </div>
      <div style={{ gridArea: "option", display: "flex" }}>
        {state.editLabel && (
          <EditLabelMol
            tagList={allTag}
            selected={v =>
              setState(prev => {
                return { tag: prev.tag.concat(v) };
              })
            }
            unSelected={v =>
              setState(prev => {
                const next = prev.tag.filter(label => {
                  if (label !== v) return label;
                });
                return { tag: next };
              })
            }
          />
        )}
      </div>
    </div>
  );
};

export default EditMol;
