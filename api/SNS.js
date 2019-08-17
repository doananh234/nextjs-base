import { post } from './utils';

export const fbSignIn = token => post('/w/auth-facebook', { token });

export const googleSignIn = token => post('/w/auth-google', { token });

/**
 * Sign in with email
 * @param {*} email, password
 */
export const signIn = ({ email, password }) =>
  post('auth/login', { email, password });

/**
 *
 * @param {*} email, password, sex, firstName, lastName, birthday,notice,
 */
export const signUp = ({ email, password, firstName, lastName }) =>
  post('auth/register', { email, password, firstName, lastName });
