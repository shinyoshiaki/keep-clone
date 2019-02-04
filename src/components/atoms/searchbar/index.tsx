import React, { FunctionComponent } from "react";
import { Search, Close } from "@material-ui/icons";
import { InputBase, IconButton } from "@material-ui/core";
import useObject from "useobject";

const SearchBarAtom: FunctionComponent<{ onSubmit: (v: string) => void }> = ({
  onSubmit
}) => {
  const { state, setState } = useObject({ input: "" });

  return (
    <div
      style={{
        marginLeft: 20,
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,0.25)",
        marginRight: 10,
        width: "100%",
        display: "flex"
      }}
    >
      <div
        style={{
          padding: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Search />
      </div>
      <InputBase
        placeholder="Search…"
        style={{
          color: "inherit",
          width: "100%",
          padding: 5,
          paddingLeft: 10
        }}
        onChange={e => {
          setState({ input: e.target.value });
          onSubmit(e.target.value);
        }}
        value={state.input}
      />
      {state.input.length > 0 && (
        <IconButton
          onClick={() => {
            setState({ input: "" });
            onSubmit("");
          }}
        >
          <Close />
        </IconButton>
      )}
    </div>
  );
};

export default SearchBarAtom;
