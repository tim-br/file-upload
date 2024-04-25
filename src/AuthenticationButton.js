import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading,
    user
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div>
      <p>Hello, {user.name}!</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  ) : (
    <button onClick={loginWithRedirect}>Log In</button>
  );
};

export default AuthenticationButton;