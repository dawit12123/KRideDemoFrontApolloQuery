import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
  query Query($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
    }
  }
`;
