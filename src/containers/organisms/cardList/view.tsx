import React, { FC } from "react";
import Masonry from "react-masonry-component";
import CardMol from "../../../components/molecules/card";
import EditModalMol from "../../../components/molecules/editModal";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Post } from "../../../modules/main";
import moment from "moment";

export interface Props {
  posts: Post[];
  searchWord: string;
  viewTag: string;
  onRemove: (code: string) => void;
  onChange: (changed: Post) => void;
}

const CardListView: FC<Props> = ({
  posts,
  searchWord,
  viewTag,
  onRemove,
  onChange
}) => {
  const allTag: string[] = posts.flatMap(post => {
    if (post.tag.length > 0) return post.tag;
    else return [] as string[];
  });

  const visible = (card: Post) => {
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
        {posts
          .sort((a, b) => Number(a.time) - Number(b.time))
          .reverse()
          .map((card, i) => {
            if (visible(card))
              return (
                <div style={{ width: 350, maxWidth: "90vw" }} key={i}>
                  <div style={{ padding: 10 }}>
                    <CardMol
                      card={card}
                      onRemove={() => onRemove(card.code)}
                      modal={(open, close, card) => {
                        const { title, text, tag, code } = card;
                        const time = moment(Date.now())
                          .utc()
                          .unix()
                          .toString();
                        return (
                          <EditModalMol
                            open={open}
                            onEdited={v => {
                              const { title, text, tag } = v;
                              onChange({
                                code,
                                time,
                                title,
                                text,
                                tag
                              });
                              close();
                            }}
                            onClose={() => close()}
                            initial={{ title, text, tag }}
                            allTag={allTag}
                            menus={() => (
                              <div>
                                <IconButton
                                  onClick={() => {
                                    onRemove(card.code);
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

export default CardListView;
