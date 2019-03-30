import gql from "graphql-tag";
import GraphQLClient from "../client";
import { NewMemo, Memo } from "../generated/graphql";

const graphqlClient: GraphQLClient = new GraphQLClient();
async function postApi(obj: NewMemo) {
  console.log(JSON.stringify(obj.tag));
  const result = await graphqlClient
    .query(
      gql`
        mutation createMemo {
          createMemo(
            input: {
              token: "${obj.token}"
              title: "${obj.title}"
              text: "${obj.text}"
              tag:${JSON.stringify(obj.tag)}
            }
          ) {
            hash
          }
        }
      `
    )
    .catch();

  if (result.createMemo) {
    const memo = result.createMemo as Memo;
    return {
      hash: memo.hash
    };
  }

  return undefined;
}

export default postApi;
