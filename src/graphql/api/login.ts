import gql from "graphql-tag";
import GraphQLClient from "../client";
import { User } from "../generated/graphql";

class UserWebApi {
  private graphqlClient: GraphQLClient = new GraphQLClient();

  getMe = async (obj: { name: string; password: string }) => {
    let result: any;

    try {
      result = await this.graphqlClient.query(
        gql`
          query getUser {
            getUser(input: { name: "${obj.name}", password: "${
          obj.password
        }" }) {
              token
              code
              name
            }
          }
        `
      );
    } catch (err) {
      throw err;
    }

    if (result.getUser) {
      const user = result.getUser as User;
      return {
        token: user.token,
        code: user.code,
        name: user.name
      };
    }

    return undefined;
  };
}

export default UserWebApi;
