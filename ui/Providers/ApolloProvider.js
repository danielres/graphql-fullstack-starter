import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./apolloClient";

export default ({ children }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);
