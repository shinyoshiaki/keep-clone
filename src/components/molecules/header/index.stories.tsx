import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";

storiesOf("molecules", module).add("header", () => (
  <div style={{ height: "100vh" }}>
    <Component />
  </div>
));
