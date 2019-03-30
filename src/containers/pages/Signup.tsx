import React, { FunctionComponent } from "react";
import { withRouter } from "react-router-dom";
import SignupOrg from "../organisms/signup";
import { Button } from "@material-ui/core";
import { History } from "history";

const Signup: FunctionComponent<{ history: History }> = ({ history }) => {
  return (
    <div
      style={{
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div style={{ maxWidth: "90%" }}>
        <SignupOrg />
        <Button onClick={() => history.push("/login")}>login</Button>
      </div>
    </div>
  );
};

export default withRouter(Signup as any);
