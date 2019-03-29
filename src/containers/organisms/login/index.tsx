import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";
import { doLogin } from "../../../modules/user";
import { Dispatch } from "redux";
import { History } from "history";
import { withRouter } from "react-router-dom";
import UserWebApi from "../../../graphql/api";
import { useApi } from "../../../hooks/useApi";

interface Props {
  dispatch: Dispatch;
  history: History;
}

const LoginOrg: FunctionComponent<Props> = ({ history, dispatch }) => {
  const api = new UserWebApi();

  const { loading, fetch } = useApi(api.getMe);

  return (
    <div>
      <AccoutFormMol
        type="login"
        onSubmit={async (name, password) => {
          if (name && password) {
            if (!loading) {
              const res = await fetch({ name, password });
              if (res) {
                console.log("success", { res });
              } else {
                console.log("error", { res });
              }
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
