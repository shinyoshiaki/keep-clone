import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";
import { doSignUp, doLogin } from "../../../modules/user";
import { Dispatch } from "redux";
import { History } from "history";
import { withRouter } from "react-router";

interface Props {
  dispatch: Dispatch;
  history: History;
}

const SignupOrg: FunctionComponent<Props> = ({ dispatch, history }) => {
  // useEffect(() => {
  //   if (data.code === "") return;
  //   const { name, pass } = arg;
  //   doSignUp(name, data.code, dispatch);
  //   login(name, pass);
  // }, [data]);

  const login = async (name: string, pass: string) => {
    // const res = await req.post("/user/login", { name, pass }).catch();
    // if (!res) return;
    // const result: { name: string; code: string; session: string } = res.data;
    // doLogin(name, result.session, result.code, dispatch);
    // history.push("/");
  };

  return (
    <div>
      {/* <AccoutFormMol
        type="signup"
        onSubmit={(name, pass) => fetchData({ name, pass })}
      /> */}
    </div>
  );
};

export default withRouter(connect(() => {
  return {};
})(SignupOrg) as any);
