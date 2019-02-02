import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("atoms", module).add("tagLabel", () => (
  <div style={{ height: "100vh" }}>
    <Component label={"label"} onClick={action("story")} />
  </div>
));
