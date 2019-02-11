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
  const { fetchData, data, isLoading, isError } = useKeepApi("/users/login", {
    session: "",
    name: ""
  });

  useEffect(() => {
    const { name, session } = data;
    if (name === "") return;
    doLogin(name, session, dispatch);
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
