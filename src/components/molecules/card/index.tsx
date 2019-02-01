import React, { FunctionComponent } from "react";
import useObject from "useobject";
import { Star, MoreVert } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export interface Card {
  title: string;
  text: string;
}

const CardMol: FunctionComponent<{ card: Card }> = ({ card }) => {
  const { state, setState } = useObject({ open: false });
  const { title, text } = card;
  return (
    <div
      style={{ borderRadius: 5, boxShadow: "0 0 1px gray", padding: 5 }}
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
            gridRow: "2/3",
            gridColumn: "1/3",
            display: "flex",
            justifyContent: "flex-end",
            opacity: state.open ? 1 : 0
          }}
        >
          <IconButton>
            <MoreVert />
          </IconButton>
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
          <IconButton style={{ width: "50px", height: "50px" }}>
            <Star />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CardMol;
