import { get } from './utils';

export const getHomeData = ctx => get('/w/home', null, null, ctx);
