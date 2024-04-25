import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './AuthenticationButton.module.css'; // Import the styles

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
    <div className="auth-container">
      <button 
        onClick={() => logout({ returnTo: window.location.origin })}
        className="auth-button"
      >
        Log Out
      </button>
      <p className="auth-greeting">Hello, {user.name}!</p>

    </div>
  ) : (
    <button 
      onClick={loginWithRedirect}
      className="auth-button"
    >
      Log In
    </button>
  );
};

export default AuthenticationButton;