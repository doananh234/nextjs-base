import { get } from './utils';

export const getBrands = () => get('/w/brands');
export const getBrandsById = (id, ctx) =>
  get(`/w/brands/${id}`, null, null, ctx);
export const getCashbackBrandsById = (id, ctx) =>
  get(`/w/brands/${id}/categories-cashback`, null, null, ctx);
export const getPromotionBrandsById = (id, ctx) =>
  get(`/w/brands/${id}/categories-promotion`, null, null, ctx);

export const getPromotions = () => get('/w/promotions');
export const getDeeplink = ({ brand, url }) =>
  get('/generate-url', { brand, url });
