import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("editModal", () => (
  <div style={{ height: "100vh" }}>
    <Component
      open={true}
      onChange={action("")}
      allTag={["test"]}
      initial={{ title: "title", text: "text", tag: ["tag"] }}
      menus={() => "menus"}
    />
  </div>
));
