import React, { FunctionComponent } from "react";
import HeaderMol from "../components/molecules/header";
import MemoOrg from "../containers/organisms/memo/view";

const Home: FunctionComponent = () => {
  return (
    <div style={{ height: "100vh" }}>
      <HeaderMol />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ padding: 30, width: 600, maxWidth: "50vw" }}>
          <MemoOrg />
        </div>
      </div>
    </div>
  );
};

export default Home;
