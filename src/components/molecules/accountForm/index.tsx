import React, { FunctionComponent } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

const AccoutFormMol: FunctionComponent<{ type: string }> = ({ type }) => {
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
        <TextField variant="outlined" placeholder="name" label="name" />
        <TextField variant="outlined" placeholder="password" label="password" />
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button>{type}</Button>
        </div>
      </div>
    </div>
  );
};

export default AccoutFormMol;
