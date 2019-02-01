import React, { FunctionComponent } from "react";
import useObject from "useobject";
import { Star, MoreVert, Delete, More } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export interface Card {
  id: string;
  title: string;
  text: string;
}

const CardMol: FunctionComponent<{
  card: Card;
  onRemove: (id: string) => void;
}> = ({ card, onRemove }) => {
  const { state, setState } = useObject({ open: false });
  const { title, text } = card;
  return (
    <div
      style={{
        borderRadius: 5,
        boxShadow: "0 0 1px gray",
        padding: 5,
        minHeight: 120
      }}
      onMouseEnter={() => setState({ open: true })}
      onMouseLeave={() => setState({ open: false })}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "70% 1fr",
          gridTemplateColumns: "80% 1fr"
        }}
      >
        <div style={{ gridRow: "1/2", gridColumn: "1/2" }}>
          <p style={{ fontWeight: "bold" }}>{title}</p>
          <p style={{ wordWrap: "break-word" }}>{text}</p>
        </div>
        <div
          style={{
            gridRow: "1/2",
            gridColumn: "2/3",
            display: "flex",
            justifyContent: "flex-end",
            opacity: state.open ? 1 : 0
          }}
        >
          <IconButton style={{ width: 50, height: 50 }}>
            <Star />
          </IconButton>
        </div>
        <div
          style={{
            gridRow: "2/3",
            gridColumn: "1/3",
            display: "flex",
            justifyContent: "flex-end",
            opacity: state.open ? 1 : 0,
            marginTop: "auto"
          }}
        >
          <IconButton
            style={{ width: 50, height: 50 }}
            onClick={() => onRemove(card.id)}
          >
            <Delete />
          </IconButton>
          <IconButton style={{ width: 50, height: 50 }}>
            <More />
          </IconButton>
          <IconButton style={{ width: 50, height: 50 }}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CardMol;
