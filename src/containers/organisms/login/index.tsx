import React, { FunctionComponent } from "react";
import { ReduxState } from "../../../modules/createStore";
import { connect } from "react-redux";
import AccoutFormMol from "../../../components/molecules/accountForm";

const LoginOrg: FunctionComponent<{}> = ({}) => {
  return <AccoutFormMol type="login" onSubmit={() => {}} />;
};

export default connect((state: ReduxState) => {
  return { ...state.user };
})(LoginOrg);
