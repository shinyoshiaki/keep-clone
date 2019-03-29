import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("molecules", module).add("edit", () => (
  <div style={{ height: "100vh" }}>
    <Component
      onEdited={action("story")}
      menus={() => <div>some</div>}
      allTag={["some"]}
    />
  </div>
));
