import React, { FunctionComponent } from "react";
import CardListView from "./view";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State } from "../../../modules/main";

interface Props extends State {}

const CardListOrg: FunctionComponent<Props> = ({ posts }) => {
  return <CardListView cards={posts} />;
};

export default connect((state: ReduxState) => {
  return { ...state.main };
})(CardListOrg);
