import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://kegeberew-taxi-backen.onrender.com/graphql';

export const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
