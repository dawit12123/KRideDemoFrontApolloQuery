import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import MainComponent from './MainComponent';

ReactDOM.render(
  <ApolloProvider client={client}>
    <MainComponent />
  </ApolloProvider>,
  document.getElementById('root')
);
