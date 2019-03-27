import gql from "graphql-tag";
import GraphQLClient from "./client";

class UserWebApi {
  private graphqlClient: GraphQLClient = new GraphQLClient(
    "http://localhost:1333/query"
  );

  getMe = async () => {
    let result: any;

    try {
      result = await this.graphqlClient.query(
        gql`
          query getUser {
            getUser(input: { name: "name", password: "pass" }) {
              token
            }
          }
        `
      );
    } catch (err) {
      throw err;
    }

    return result.getUser;
  };
}

export default UserWebApi;
