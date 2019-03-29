import React, { FunctionComponent, useEffect } from "react";
import MemoOrg from "../containers/organisms/memo";
import CardListOrg from "../containers/organisms/cardList";
import LayoutOrg from "../containers/organisms/layout";
import { connect } from "react-redux";
import { ReduxState } from "../modules/createStore";
import { Dispatch } from "redux";
import { State, doPost, doChange } from "../modules/main";
import { StateUser } from "../modules/user";

interface Props extends State, StateUser {
  dispatch: Dispatch;
}

const Home: FunctionComponent<Props> = ({ posts, session, code, dispatch }) => {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    console.log({ session, code });
    if (session && code) {
      console.log("init");

      let fail = false;
      for (let post of posts) {
        if (fail) break;
        if (post.offline) {
          // const res = await req
          //   .post("memo/post", {
          //     session,
          //     code,
          //     title: post.title,
          //     text: post.text,
          //     tag: post.tag
          //   })
          //   .catch(() => {
          //     fail = true;
          //   });
          // if (res) {
          // }
        }
      }

      //   const get = await req
      //     .post("memo/get", { session, code })
      //     .catch(console.log);
      //   if (!get) return;
      //   const hashs = posts.map(post => post.hash);

      //   console.log({ get });

      //   (get.data as {
      //     memos: {
      //       code: string;
      //       hash: string;
      //       title: string;
      //       text: string;
      //       tag: string;
      //     }[];
      //   }).memos.forEach(memo => {
      //     if (!hashs.includes(memo.hash)) {
      //       doPost(
      //         { ...memo, tag: memo.tag.split(","), offline: false },
      //         dispatch
      //       );
      //     } else {
      //       const post = posts.find(post => post.hash === memo.hash);
      //       if (post) {
      //         const { tag, title, text } = post;
      //         if (
      //           tag !== memo.tag.split(",") ||
      //           title !== memo.title ||
      //           text !== memo.text
      //         ) {
      //           doChange(
      //             { ...memo, tag: memo.tag.split(","), offline: false },
      //             dispatch
      //           );
      //         }
      //       }
      //     }
      //   });
    }
  };

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

export default connect((state: ReduxState) => {
  return { ...state.main, ...state.user };
})(Home);
