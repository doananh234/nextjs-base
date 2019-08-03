import { get, put } from './utils';

export const getAccountInfo = () => get('users/me');

export const updateAccountInfo = ({ avatar, firstName, lastName }) =>
  put('users/me', { avatar, firstName, lastName });
