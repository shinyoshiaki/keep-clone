import React from "react";
import { storiesOf } from "@storybook/react";
import Component from "./view";

storiesOf("organisms", module).add("memo", () => (
  <div style={{ height: "100vh" }}>
    <Component />
  </div>
));
