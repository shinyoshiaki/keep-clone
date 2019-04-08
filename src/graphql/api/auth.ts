import gql from "graphql-tag";
import GraphQLClient from "../client";

class AuthWebApi {
  private graphqlClient: GraphQLClient = new GraphQLClient();

  getMe = async (obj: { token: string }) => {
    let result: any;

    try {
      result = await this.graphqlClient.query(
        gql`
          query auth {
            auth(input: {
                token:"${obj.token}"         
            }) {
              msg
            }
          }
        `
      );
    } catch (err) {
      throw err;
    }

    if (result.auth) {
      const user = result.auth as String;
      return {
        msg: user
      };
    }

    return undefined;
  };
}

export default AuthWebApi;
