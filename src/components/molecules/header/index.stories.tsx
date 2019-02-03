import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("header", () => (
  <div style={{ height: "100vh" }}>
    <Component enterSearch={action("story")} drawer={() => <p>some</p>} />
  </div>
));
