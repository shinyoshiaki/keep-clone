import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("card", () => (
  <div style={{ height: "100vh" }}>
    <Component
      card={{
        code: Math.random().toString(),
        time: Date.now().toString(),
        title: "title",
        text: "text",
        tag: ["some", "test"]
      }}
      onRemove={action("story")}
      modal={() => ""}
    />
  </div>
));
