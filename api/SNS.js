import { post } from './utils';

export const fbSignIn = ({ accessToken }) =>
  post('auth/loginFacebook', { accessToken });

export const googleSignIn = ({ accessToken }) =>
  post('auth/loginGoogle', { accessToken });

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
