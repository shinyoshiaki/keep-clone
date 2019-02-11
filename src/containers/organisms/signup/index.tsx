import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";
import { useKeepApi, req } from "../../../hooks/useApi";
import { doSignUp, doLogin } from "../../../modules/user";
import { Dispatch } from "redux";
import { History } from "history";
import { withRouter } from "react-router";

interface Props {
  dispatch: Dispatch;
  history: History;
}

const SignupOrg: FunctionComponent<Props> = ({ dispatch, history }) => {
  const { data, fetchData, isLoading, isError } = useKeepApi("/users/signup", {
    name: "",
    code: "",
    pass: ""
  });

  useEffect(() => {
    if (data.name === "") return;
    const { name, pass, code } = data;
    doSignUp(name, code, dispatch);
    login(name, pass);
  }, [data]);

  const login = async (name: string, pass: string) => {
    const res = await req.post("/users/login", { name, pass }).catch();
    if (!res) return;
    const result: { name: string; code: string; session: string } = res.data;
    doLogin(name, result.session, dispatch);
    history.push("/");
  };

  return (
    <div>
      {isLoading && "loding"}
      {isError && JSON.stringify(isError)}
      <AccoutFormMol
        type="signup"
        onSubmit={(name, pass) => fetchData({ name, pass })}
      />
    </div>
  );
};

export default withRouter(connect(() => {
  return {};
})(SignupOrg) as any);
