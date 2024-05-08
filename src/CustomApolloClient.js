import React from 'react';
import { useQuery } from '@apollo/client';

const CustomApolloClient = ({ client, query, variables, children }) => {
  const { loading, error, data } = useQuery(query, { variables });

  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return children(data);
};

export default CustomApolloClient;
