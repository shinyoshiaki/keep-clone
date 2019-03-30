import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";
import { doLogin } from "../../../modules/user";
import { Dispatch } from "redux";
import { History } from "history";
import { withRouter } from "react-router";
import { useApi } from "../../../hooks/useApi";
import signUpApi from "../../../graphql/api/signup";

interface Props {
  dispatch: Dispatch;
  history: History;
}

const SignupOrg: FunctionComponent<Props> = ({ dispatch, history }) => {
  const { loading, fetch, error } = useApi(signUpApi);
  return (
    <div>
      {error && <p>error</p>}
      <AccoutFormMol
        type="signup"
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
})(SignupOrg) as any);
