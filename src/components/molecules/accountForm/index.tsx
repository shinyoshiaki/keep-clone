import React, { FunctionComponent, useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

const AccoutFormMol: FunctionComponent<{
  type: string;
  onSubmit: (name: string, pass: string) => void;
}> = ({ type, onSubmit }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div
      style={{
        borderRadius: 5,
        boxShadow: "0 0 1px gray",
        display: "flex",
        justifyContent: "center",
        padding: 30
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: 210,
          width: 500
        }}
      >
        <Typography>{type}</Typography>
        <TextField
          variant="outlined"
          placeholder="name"
          label="name"
          onChange={e => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          placeholder="password"
          label="password"
          onChange={e => setPass(e.target.value)}
        />
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button
            onClick={() => {
              onSubmit(name, pass);
              setName("");
              setPass("");
            }}
          >
            {type}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccoutFormMol;
