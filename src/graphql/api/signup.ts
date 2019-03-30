import gql from "graphql-tag";
import GraphQLClient from "../client";
import { User } from "../generated/graphql";

const graphqlClient: GraphQLClient = new GraphQLClient();

const signUpApi = async (obj: { name: string; password: string }) => {
  let result: any;

  try {
    result = await graphqlClient.query(
      gql`
        mutation createUser {
          createUser(input: { name: "${obj.name}", password: "${
        obj.password
      }" }) {
            code
            token
            name
          }
        }
      `
    );
  } catch (err) {
    throw err;
  }

  if (result && result.createUser) {
    const user = result.createUser as User;
    return {
      token: user.token,
      code: user.code,
      name: user.name
    };
  }

  return undefined;
};

export default signUpApi;
