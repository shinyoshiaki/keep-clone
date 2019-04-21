import gql from "graphql-tag";
import GraphQLClient from "../client";

const graphqlClient: GraphQLClient = new GraphQLClient();

export default async function AuthApi(obj: { token: string }) {
  const result = await graphqlClient
    .query(
      gql`
      query auth {
        auth(input: {
            token:"${obj.token}"
        })
      }
    `
    )
    .catch();

  const { auth } = result;

  if (auth) {
    return auth as string;
  }

  return undefined;
}
