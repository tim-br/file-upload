import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState) => {
  // Use the React Router history to replace the URL after login
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );

  document.body.classList.add('black-background')
  const header = document.querySelector('.app-header');
  if (header) {
    header.style.backgroundColor = '#000000'; // Set background color to black
    header.style.color = '#FFFFFF'; // Set text color to white for visibility
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
      }}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
