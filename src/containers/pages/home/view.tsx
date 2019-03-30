import React, { FC } from "react";
import MemoOrg from "../../organisms/memo";
import CardListOrg from "../../organisms/cardList";
import LayoutOrg from "../../organisms/layout";

const HomeView: FC = () => {
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

export default HomeView