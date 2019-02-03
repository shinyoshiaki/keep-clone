import React, { FunctionComponent } from "react";
import HeaderMol from "../components/molecules/header";
import MemoOrg from "../containers/organisms/memo";
import CardListOrg from "../containers/organisms/cardList";
import LayoutOrg from "../containers/organisms/layout";

const Home: FunctionComponent = () => {
  return (
    <LayoutOrg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ padding: 30, width: 600, maxWidth: "90vw" }}>
          <MemoOrg />
        </div>
      </div>
      <CardListOrg />
    </LayoutOrg>
  );
};

export default Home;
