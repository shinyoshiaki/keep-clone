import { execute, makePromise, GraphQLRequest } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { gqlUrl } from "../environment";

class GraphQLClient {
  private httpLink: HttpLink;

  constructor() {
    this.httpLink = new HttpLink({ uri: gqlUrl });
  }

  query = async (query: any, variables: Record<string, any> = {}) => {
    const op: GraphQLRequest = { query, variables };
    try {
      const result = await makePromise(execute(this.httpLink, op));

      return result.data;
    } catch (err) {
      throw err;
    }
  };
}

export default GraphQLClient;
