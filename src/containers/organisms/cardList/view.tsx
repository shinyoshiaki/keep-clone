import React, { FunctionComponent } from "react";
import CardMol, { Card } from "../../../components/molecules/card";
import Masonry from "react-masonry-component";

export interface CardListProps {
  cards: Card[];
}

const CardListView: FunctionComponent<CardListProps> = ({ cards }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "90vw"
        }}
      >
        <Masonry options={{}}>
          {cards.map((card, i) => (
            <div style={{ width: 280 }} key={i}>
              <div style={{ padding: 10 }}>
                <CardMol card={card} />
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default CardListView;
