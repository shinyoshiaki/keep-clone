import gql from "graphql-tag";
import GraphQLClient from "./client";
import { User } from "./generated/graphql";

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
            }
          }
        `
      );
    } catch (err) {
      throw err;
    }

    if (result.getUser) {
      const user = result.getUser as User;
      return user.token;
    }

    return undefined;
  };
}

export default UserWebApi;
