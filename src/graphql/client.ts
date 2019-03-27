import { execute, makePromise, GraphQLRequest } from "apollo-link";
import { HttpLink } from "apollo-link-http";

class GraphQLClient {
  private httpLink: HttpLink;

  constructor(endpointUrl: string) {
    this.httpLink = new HttpLink({ uri: endpointUrl });
  }

  query = async (query: any, variables: Record<string, any> = {}) => {
    const op: GraphQLRequest = { query, variables };
    try {
      const result = await makePromise(execute(this.httpLink, op));
      console.log({ result });

      return result.data;
    } catch (err) {
      throw err;
    }
  };
}

export default GraphQLClient;
