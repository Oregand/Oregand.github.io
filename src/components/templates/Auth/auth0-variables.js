let callbackUrl = 'http://localhost:3000/callback';
if (process.env.NODE_ENV === 'development') {
  callbackUrl = 'http://localhost:3000/callback';
}

export const AUTH_CONFIG = {
  domain: 'david-personal.eu.auth0.com',
  clientId: '2OMUluKOkbbRmDGTBAA8YAeSWRXK89Ix',
  callbackUrl: callbackUrl
};
