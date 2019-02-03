import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("molecules", module).add("editLabel", () => (
  <div style={{ height: "100vh" }}>
    <Component tagList={["1", "2"]} />
  </div>
));
