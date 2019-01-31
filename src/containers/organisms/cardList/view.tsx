import React, { FunctionComponent } from "react";
import CardMol, { Card } from "../../../components/molecules/card";

export interface CardListProps {
  cards: Card[];
}

const CardListOrg: FunctionComponent<CardListProps> = ({ cards }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "90vw",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {cards.map(card => (
          <div style={{ width: "30vw" }}>
            <div style={{ padding: 10 }}>
              <CardMol card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListOrg;
