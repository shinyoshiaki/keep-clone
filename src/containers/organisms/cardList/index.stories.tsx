import React from "react";
import { storiesOf } from "@storybook/react";
import Component, { CardListProps } from "./view";
import { Card } from "../../../components/molecules/card";

export const makeCardMock = (
  payload: { [key in keyof Card]?: Card[key] } = {}
): Card => {
  return Object.assign(
    {},
    {
      title: "this is mock string",
      text: "this is mock string"
    },
    payload
  );
};

export const makeCardListPropsMock = (
  payload: { [key in keyof CardListProps]?: CardListProps[key] } = {}
): CardListProps => {
  return Object.assign(
    {},
    {
      cards: new Array(13)
        .toString()
        .split(",")
        .map(() => Object.assign({}, makeCardMock()))
    },
    payload
  );
};

storiesOf("organisms", module).add("cardList", () => (
  <div style={{ height: "100vh" }}>
    <Component cards={makeCardListPropsMock().cards} />
  </div>
));
