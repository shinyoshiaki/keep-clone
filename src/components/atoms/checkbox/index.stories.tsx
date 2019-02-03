import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("atoms", module).add("checkbox", () => (
  <div style={{ height: "100vh" }}>
    <Component label="label" onChange={action("story")} />
  </div>
));
