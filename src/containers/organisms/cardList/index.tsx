import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State, doRemove, doChange } from "../../../modules/main";
import { Dispatch } from "redux";
import Masonry from "react-masonry-component";
import CardMol from "../../../components/molecules/card";

interface Props extends State {
  dispatch: Dispatch<any>;
}

const CardListOrg: FunctionComponent<Props> = ({ posts, dispatch }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Masonry options={{ fitWidth: true, columnWidth: 350 }}>
        {posts.map((card, i) => (
          <div style={{ width: 350, maxWidth: "90vw" }} key={i}>
            <div style={{ padding: 10 }}>
              <CardMol
                card={card}
                onRemove={id => doRemove(id, dispatch)}
                onChange={v => {
                  const { title, text, id } = v;
                  doChange(
                    { id, title, text, tag: [], offline: true },
                    dispatch
                  );
                }}
              />
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main };
})(CardListOrg);
