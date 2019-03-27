import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";
import { doLogin } from "../../../modules/user";
import { Dispatch } from "redux";
import { History } from "history";
import { withRouter } from "react-router-dom";
import UserWebApi from "../../../graphql/api";

interface Props {
  dispatch: Dispatch;
  history: History;
}

const LoginOrg: FunctionComponent<Props> = ({ history, dispatch }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const api = new UserWebApi();

  return (
    <div>
      <AccoutFormMol
        type="login"
        onSubmit={async (name, pass) => {
          const res = await api.getMe();
          console.log({ res });
        }}
      />
    </div>
  );
};

export default withRouter(connect(() => {
  return {};
})(LoginOrg) as any);
