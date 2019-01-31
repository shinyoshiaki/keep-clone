import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";

storiesOf("molecules", module).add("card", () => (
  <div style={{ height: "100vh" }}>
    <Component card={{ title: "title", text: "text" }} />
  </div>
));
