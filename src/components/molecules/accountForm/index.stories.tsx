import React from "react";
import { storiesOf } from "@storybook/react";
import Component from ".";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("accountForm", () => (
  <div style={{ height: "100vh" }}>
    <Component type="login" onSubmit={action("")} />
  </div>
));
