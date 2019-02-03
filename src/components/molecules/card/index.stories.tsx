import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("card", () => (
  <div style={{ height: "100vh" }}>
    <Component
      card={{
        id: Math.random().toString(),
        title: "title",
        text: "text"
      }}
      onRemove={action("story")}
      onChange={action("story")}
    />
  </div>
));
