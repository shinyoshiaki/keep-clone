import React from "react";
import { storiesOf } from "@storybook/react";
import Component, { CardListProps } from "./view";
import { Card } from "../../../components/molecules/card";
import { action } from "@storybook/addon-actions";

export const makeCardMock = (
  payload: { [key in keyof Card]?: Card[key] } = {}
): Card => {
  return Object.assign(
    {},
    {
      id: "this is mock string",
      title: "this is mock string",
      text: "this is mock string"
    },
    payload
  );
};

storiesOf("organisms", module).add("cardList", () => (
  <div style={{ height: "100vh" }}>
    <Component
      cards={[...Array(5)].map(_ => makeCardMock())}
      onRemove={action}
    />
  </div>
));
