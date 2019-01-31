import React, { FunctionComponent } from "react";

export interface Card {
  title: string;
  text: string;
}

const CardMol: FunctionComponent<{ card: Card }> = ({ card }) => {
  const { title, text } = card;
  return (
    <div style={{ borderRadius: 5, boxShadow: "0 0 1px gray", padding: 5 }}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default CardMol;
