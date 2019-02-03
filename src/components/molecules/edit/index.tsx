import React, { FunctionComponent, useEffect } from "react";
import { InputBase, Button, IconButton } from "@material-ui/core";
import useObject from "useobject";
import { Star } from "@material-ui/icons";

export interface EditInput {
  title: string;
  text: string;
}

const EditMol: FunctionComponent<{
  onClose: (input: EditInput) => void;
  menus: () => any;
  initial?: { title: string; text: string };
}> = ({ onClose, menus, initial }) => {
  const { state, setState } = useObject({ title: "", text: "" });

  useEffect(() => {
    if (initial) {
      const { title, text } = initial;
      setState({ title, text });
    }
  }, [initial]);

  return (
    <div
      style={{
        borderRadius: 5,
        boxShadow: "0 0 4px gray",
        display: "grid",
        gridTemplateColumns: "1.6fr 0.2fr",
        gridTemplateRows: "1fr 2fr 1fr",
        gridTemplateAreas: `"title star" "text ." "menu close"`
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
      <div
        style={{
          gridArea: "menu",
          paddingLeft: 10,
          display: "flex"
        }}
      >
        {menus()}
      </div>
      <div style={{ gridArea: "close" }}>
        <Button
          onClick={() => {
            onClose(state);
            setState({ title: "", text: "" });
          }}
        >
          close
        </Button>
      </div>
    </div>
  );
};

export default EditMol;
