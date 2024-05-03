// auth0.js

const { Auth0Client } = require('@auth0/auth0-spa-js');

const auth0 = new Auth0Client({
  domain: 'dev-urdzk5yq.us.auth0.com',
  client_id: 'YYCViVGRKioB5RNOuZHWNvs50fajQmGI5',
});

module.exports = auth0;
