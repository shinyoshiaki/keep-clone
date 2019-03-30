import gql from "graphql-tag";
import GraphQLClient from "../client";
import { Memo, GetAllMemo, AllMemo } from "../generated/graphql";
import { Post } from "../../modules/main";

const graphqlClient: GraphQLClient = new GraphQLClient();

async function allPostApi(obj: GetAllMemo) {
  const result = await graphqlClient
    .query(
      gql`
        query getAllMemo {
          getAllMemo(
            input: { token: "${obj.token}" }
          ) {
            memos {
              owner
              code
              title
              time
              text
              tag
            }
          }
        }
      `
    )
    .catch();

  if (result.getAllMemo) {
    const res = result.getAllMemo as AllMemo;
    return res.memos
      ? ((res.memos.map(memo => {
          memo.tag = memo.tag.split(",") as any;
          return memo;
        }) as any) as Post[])
      : undefined;
  }

  return undefined;
}

export default allPostApi;
