import React, { FunctionComponent } from "react";
import HeaderMol from "../../../components/molecules/header";
import LabelListMol from "../../../components/molecules/labelList";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State } from "../../../modules/main";
import { Dispatch } from "redux";
import { doSetSearch, doSetViewTag } from "../../../modules/ui";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { StateUser } from "../../../modules/user";

interface Props extends State, StateUser {
  dispatch: Dispatch<any>;
  history?: any;
}

const LayoutOrg: FunctionComponent<Props> = ({
  children,
  posts,
  dispatch,
  history,
  name
}) => {
  const allTag: string[] = Array.from(
    new Set(
      posts.flatMap(post => {
        if (post.tag.length > 0) return post.tag;
        else return [] as string[];
      })
    )
  );
  console.log({ allTag });
  return (
    <div style={{ minHeight: "95vh" }}>
      <HeaderMol
        enterSearch={word => {
          doSetSearch(word, dispatch);
        }}
        drawer={close => (
          <LabelListMol
            labels={allTag}
            onClick={tag => {
              doSetViewTag(tag, dispatch);
              close();
            }}
            resetAll={() => {
              doSetViewTag(undefined, dispatch);
              close();
            }}
          />
        )}
        account={() =>
          name ? (
            <Button
              color="inherit"
              onClick={() => {
                console.log({ history });
                history.push("login");
              }}
            >
              {name}
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                console.log({ history });
                history.push("login");
              }}
            >
              login
            </Button>
          )
        }
      />
      {children}
    </div>
  );
};

export default withRouter(connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(LayoutOrg) as any);
