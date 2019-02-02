import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("labelList", () => (
  <div style={{ height: "100vh" }}>
    <Component labels={["label", "label", "label"]} onClick={action("story")} />
  </div>
));
