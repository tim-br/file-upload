# React Application Setup

This project is set up using Create React App and includes functionality for uploading data to an AWS API Gateway endpoint and authentication via Auth0.

### Prerequisites

- [Node.js and npm](https://nodejs.org/en/download/) (npm comes with Node.js)

### Environment Variables

```
REACT_APP_UPLOAD_ENDPOINT=https://your-aws-api-gateway-url.com/env/upload
REACT_APP_AUTH0_AUDIENCE=your-api-audience
REACT_APP_AUTH0_DOMAIN=your-auth0-domain.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```

### Run the development server:

```
npm start
```