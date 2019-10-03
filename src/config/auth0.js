import * as auth0 from 'auth0-js';
// import Cookie from 'universal-cookie';

import config from './auth_config';
import * as http from './http';

import { ApiRoot } from './api';

// const cookieService = new Cookie();

const webAuth = new auth0.WebAuth({
  clientID: config.clientID,
  domain: config.domain,
  responseType: 'token id_token',
  // audience: 'https://excelplay2k18.auth0.com/userinfo',
  redirectUri: config.redirectUri,
  scope: 'openid profile email',
});

export const login = () => {
  webAuth.authorize();
};

export const handleAuthentication = (hash, history) => {
  webAuth.parseHash({ hash: hash }, function(err, authResult) {
    if (err) {
      return console.log(err);
    }

    setSession(authResult, loc => {
      history.push(loc);
    });
  });
};

const setSession = async (authResult, redirect) => {
  // Set the time that the access token will expire at
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime(),
  );
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
  const body = new FormData();
  body.append('access_token', authResult.accessToken);
  console.log(authResult.accessToken);
  const res = await http.post(ApiRoot + 'auth/v1/signin', body);
  console.log(res);
  const user = await http.get(ApiRoot + 'auth/v1/user/detail');
  console.log(user);
  if (res.Error) {
    alert('Login failed');
    redirect('/login');
  }
  redirect('/');
};
