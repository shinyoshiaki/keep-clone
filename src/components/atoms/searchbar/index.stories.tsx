import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("atoms", module).add("searchbar", () => (
  <div style={{ height: "100vh", backgroundColor: "gray" }}>
    <Component onSubmit={action("story")} />
  </div>
));
