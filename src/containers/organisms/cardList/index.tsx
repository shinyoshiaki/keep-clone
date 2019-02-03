import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { State, doRemove, doChange } from "../../../modules/main";
import { Dispatch } from "redux";
import Masonry from "react-masonry-component";
import CardMol, { Card } from "../../../components/molecules/card";
import EditModalMol from "../../../components/molecules/editModal";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { StateUi } from "../../../modules/ui";

interface Props extends State, StateUi {
  dispatch: Dispatch<any>;
}

const CardListOrg: FunctionComponent<Props> = ({
  posts,
  dispatch,
  viewTag,
  searchWord
}) => {
  const allTag: string[] = posts.flatMap(post => {
    if (post.tag.length > 0) return post.tag;
    else return [] as string[];
  });

  const visible = (card: Card) => {
    if (searchWord.length > 0)
      if (card.text.includes(searchWord) || card.title.includes(searchWord)) {
        console.log(1, searchWord);
        return true;
      }
    if (viewTag && card.tag.includes(viewTag)) {
      console.log(2);
      return true;
    }
    if (!(searchWord.length > 0) && !viewTag) {
      console.log(3);
      return true;
    }
    return false;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Masonry options={{ fitWidth: true, columnWidth: 350 }}>
        {posts.map((card, i) => {
          if (visible(card))
            return (
              <div style={{ width: 350, maxWidth: "90vw" }} key={i}>
                <div style={{ padding: 10 }}>
                  <CardMol
                    card={card}
                    onRemove={() => doRemove(card.id, dispatch)}
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
                          menus={() => (
                            <div>
                              <IconButton
                                onClick={() => {
                                  doRemove(card.id, dispatch);
                                  close();
                                }}
                              >
                                <Delete />
                              </IconButton>
                            </div>
                          )}
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
  return { ...state.main, ...state.ui };
})(CardListOrg);
