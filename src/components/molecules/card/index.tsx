import React, { FunctionComponent } from "react";
import useObject from "useobject";
import { Star, MoreVert, Delete, More } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import TagLabelAtom from "../../atoms/tagLabel";

export interface Card {
  id: string;
  title: string;
  text: string;
  tag: string[];
}

const display = (open: boolean) => (open ? "" : "none");

const CardMol: FunctionComponent<{
  card: Card;
  onRemove: () => void;
  modal: (open: boolean, close: () => void, card: Card) => any;
}> = ({ card, onRemove, modal }) => {
  const { state, setState } = useObject({ open: false, modal: false });
  const { title, text, id, tag } = card;

  return (
    <div>
      {modal(state.modal, () => setState({ modal: false }), card)}
      <div
        style={{
          borderRadius: 5,
          boxShadow: "0 0 1px gray",
          padding: 5,
          paddingLeft: 20
        }}
        onMouseEnter={() => setState({ open: true })}
        onMouseLeave={() => setState({ open: false })}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1.7fr 0.3fr",
            gridTemplateRows: "auto auto auto auto",
            gridTemplateAreas: `"title star" "text text" "tag tag" "menu menu"`
          }}
        >
          <div style={{ gridArea: "title", overflow: "hidden" }}>
            <div style={{ fontWeight: "bold", marginTop: 10 }}>{title}</div>
          </div>
          <div
            style={{ gridArea: "text" }}
            onClick={() => {
              setState({ modal: true });
            }}
          >
            <div style={{ wordWrap: "break-word" }}>{text}</div>
          </div>
          <div
            style={{
              gridArea: "star",
              display: "flex",
              justifyContent: "flex-end",
              height: 50
            }}
          >
            {state.open && (
              <IconButton style={{ width: 50 }}>
                <Star />
              </IconButton>
            )}
          </div>
          {tag.length > 0 && (
            <div style={{ gridArea: "tag", paddingTop: 10 }}>
              {tag.map(label => (
                <TagLabelAtom label={label} key={label} />
              ))}
            </div>
          )}
          <div
            style={{
              gridArea: "menu",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "auto",
              height: 50
            }}
          >
            <div style={{ display: display(state.open) }}>
              <IconButton style={{ width: 50 }} onClick={() => onRemove()}>
                <Delete />
              </IconButton>
              <IconButton style={{ width: 50 }}>
                <More />
              </IconButton>
              <IconButton style={{ width: 50 }}>
                <MoreVert />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMol;
