import React, { FunctionComponent } from "react";
import { InputBase, Button } from "@material-ui/core";
import useObject from "useobject";

export interface EditInput {
  title: string;
  text: string;
}

const EditMol: FunctionComponent<{ onClose: (input: EditInput) => void }> = ({
  onClose
}) => {
  const { state, setState } = useObject({ title: "", text: "" });
  return (
    <div style={{ borderRadius: 5, boxShadow: "0 0 4px gray" }}>
      <div>
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ margin: 10 }}
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
