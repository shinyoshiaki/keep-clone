import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";
import { useKeepApi } from "../../../hooks/useApi";
import { doLogin } from "../../../modules/user";
import { Dispatch } from "redux";
import { History } from "history";
import { withRouter } from "react-router-dom";

interface Props {
  dispatch: Dispatch;
  history: History;
}

const LoginOrg: FunctionComponent<Props> = ({ history, dispatch }) => {
  const { fetchData, data, isLoading, isError, arg } = useKeepApi(
    "/user/login",
    { name: "", pass: "" },
    { session: "", code: "" }
  );

  useEffect(() => {
    const { session, code } = data;
    const { name } = arg;
    if (session === "") return;
    doLogin(name, session,code ,dispatch);
    history.push("/");
  }, [data]);

  return (
    <div>
      {isLoading && "loading"}
      {isError && JSON.stringify(isError)}
      <AccoutFormMol
        type="login"
        onSubmit={(name, pass) => fetchData({ name, pass })}
      />
    </div>
  );
};

export default withRouter(connect(() => {
  return {};
})(LoginOrg) as any);
