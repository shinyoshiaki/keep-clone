import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";
import { doLogin } from "../../../modules/user";
import { Dispatch } from "redux";
import { History } from "history";
import { withRouter } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import UserWebApi from "../../../graphql/api/login";

interface Props {
  dispatch: Dispatch;
  history: History;
}

const LoginOrg: FunctionComponent<Props> = ({ history, dispatch }) => {
  const api = new UserWebApi();

  const { loading, fetch, error } = useApi(api.getMe);

  return (
    <div>
      {error && <p>error</p>}
      <AccoutFormMol
        type="login"
        onSubmit={async (name, password) => {
          if (!loading) {
            const res = await fetch({ name, password });
            if (res) {
              console.log("success", { res });
              dispatch(doLogin(res.name, res.token, res.code));
              history.push("/");
            }
          }
        }}
      />
    </div>
  );
};

export default withRouter(connect(() => {
  return {};
})(LoginOrg) as any);
