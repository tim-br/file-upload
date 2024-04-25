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

  console.log("USER ", user)

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
      <p className="auth-greeting">Hello, {user.username || user.nickname}!</p>
      <div className="auth-greeting">
        <marquee behavior="slide" direction="left" scrollamount="10">🌟 Hello, {user.name}! Welcome back! 🌟</marquee>
      </div>
    </div>
  ) : (
    <button 
      onClick={loginWithRedirect}
      className="initial-auth-button"
    >
      Log In
    </button>
  );
};

export default AuthenticationButton;