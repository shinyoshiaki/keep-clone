import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State, doRemove, doChange } from "../../../modules/main";
import { Dispatch } from "redux";
import Masonry from "react-masonry-component";
import CardMol from "../../../components/molecules/card";
import EditModalMol from "../../../components/molecules/editModal";
import useObject from "useobject";

interface Props extends State {
  dispatch: Dispatch<any>;
}

const CardListOrg: FunctionComponent<Props> = ({
  posts,
  dispatch,
  viewTag
}) => {
  const allTag: string[] = posts.flatMap(post => {
    if (post.tag.length > 0) return post.tag;
    else return [] as string[];
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Masonry options={{ fitWidth: true, columnWidth: 350 }}>
        {posts.map((card, i) => {
          if (!viewTag || card.tag.includes(viewTag))
            return (
              <div style={{ width: 350, maxWidth: "90vw" }} key={i}>
                <div style={{ padding: 10 }}>
                  <CardMol
                    card={card}
                    onRemove={id => doRemove(id, dispatch)}
                    modal={(open, close, card) => {
                      const { title, text, id, tag } = card;
                      return (
                        <EditModalMol
                          open={open}
                          onChange={v => {
                            const { title, text, tag } = v;
                            doChange(
                              { id, title, text, tag, offline: true },
                              dispatch
                            );
                            close();
                          }}
                          initial={{ title, text, tag }}
                          allTag={allTag}
                        />
                      );
                    }}
                  />
                </div>
              </div>
            );
        })}
      </Masonry>
    </div>
  );
};

export default connect((state: ReduxState) => {
  return { ...state.main };
})(CardListOrg);
