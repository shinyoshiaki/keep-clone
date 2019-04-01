import gql from "graphql-tag";
import GraphQLClient from "../client";
import { Memo, EditMemo } from "../generated/graphql";

const graphqlClient: GraphQLClient = new GraphQLClient();

async function editpostApi(obj: EditMemo) {
  console.log(JSON.stringify(obj.tag));
  const result = await graphqlClient
    .query(
      gql`
        mutation EditMemo {
          editMemo(
            input: {
              token: "${obj.token}"
              memoCode: "${obj.memoCode}"
              title: "${obj.title}"
              text: "${obj.text}"
              tag: ${JSON.stringify(obj.tag)}
            }
          ) {
            time
          }
        }
      `
    )
    .catch();

  if (result && result.editMemo) {
    const memo = result.editMemo as Memo;
    return {
      time: memo.time
    };
  }

  return undefined;
}

export default editpostApi;
