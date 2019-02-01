import React from "react";
import { storiesOf } from "@storybook/react";
import Component from "./view";
import { action } from "@storybook/addon-actions";

storiesOf("organisms", module).add("memo", () => (
  <div style={{ height: "100vh" }}>
    <Component save={action("story")} />
  </div>
));
