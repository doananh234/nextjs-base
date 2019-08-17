import { combineReducers } from 'redux';
import placeholder from './placeholder/reducers';
import auth from './auth/reducers';
import app from './app/reducers';
import home from './home/reducers';
import brands from './brands/reducers';
import promotions from './promotions/reducers';
import loading from './loading/reducers';
import brandPromotions from './brandPromotions/reducers';
import brandCashbacks from './brandCashbacks/reducers';

export default combineReducers({
  brandCashbacks,
  brandPromotions,
  placeholder,
  auth,
  app,
  home,
  brands,
  promotions,
  loading,
});
