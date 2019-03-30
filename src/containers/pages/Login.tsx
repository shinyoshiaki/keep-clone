import React, { FunctionComponent } from "react";
import { withRouter } from "react-router-dom";
import LoginOrg from "../organisms/login";
import { Button } from "@material-ui/core";
import { History } from "history";

const Login: FunctionComponent<{ history: History }> = ({ history }) => {
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
        <LoginOrg />
        <Button onClick={() => history.push("/signup")}>sign up</Button>
      </div>
    </div>
  );
};

export default withRouter(Login as any);
