import gql from "graphql-tag";
import GraphQLClient from "../client";
import { Memo, RemoveMemo } from "../generated/graphql";

const graphqlClient: GraphQLClient = new GraphQLClient();

async function removepostApi(obj: RemoveMemo) {
  const result = await graphqlClient
    .query(
      gql`
        mutation RemoveMemo {
          removeMemo(
            input: {
              token: "${obj.token}"
              memoCode: "${obj.memoCode}"
            }
          ) {
            code
          }
        }
      `
    )
    .catch();

  console.log({ result });

  if (result && result.removeMemo) {
    const memo = result.removeMemo as Memo;
    return {
      code: memo.code
    };
  }

  return undefined;
}

export default removepostApi;
