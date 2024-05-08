import React from 'react';
import { client } from './apollo';
import { LOGIN_QUERY } from './queries';
import CustomApolloClient from './CustomApolloClient';

const MainComponent = () => {
  const handleLogin = (userName, password) => {
    return (
      <CustomApolloClient client={client} query={LOGIN_QUERY} variables={{ userName, password }}>
        {data => (
          <div>
            <p>Login successful!</p>
            <p>Token: {data.login.token}</p>
          </div>
        )}
      </CustomApolloClient>
    );
  };

  return (
    <div>
      {handleLogin('admin', 'admin')}
    </div>
  );
};

export default MainComponent;
