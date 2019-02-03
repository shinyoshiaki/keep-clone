import React, { FunctionComponent } from "react";
import HeaderMol from "../../../components/molecules/header";
import LabelListMol from "../../../components/molecules/labelList";

const LayoutOrg: FunctionComponent = ({ children }) => {
  return (
    <div style={{ minHeight: "95vh" }}>
      <HeaderMol
        enterSearch={() => {}}
        drawer={() => (
          <LabelListMol labels={["label", "label"]} onClick={() => {}} />
        )}
      />
      {children}
    </div>
  );
};

export default LayoutOrg;
