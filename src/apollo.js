import { ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const GRAPHQL_ENDPOINT = 'https://kegeberew-taxi-backen.onrender.com/graphql';


const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE1MjM2MTc0LCJleHAiOjE3MTUyNDY5NzR9.glZM3K3YeLthP4XhawY8jHEn9IGZ_FFAb4F4eIKPM9M';
    return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


