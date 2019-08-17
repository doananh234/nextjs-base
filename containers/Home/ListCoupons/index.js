import React from 'react';
// import PropTypes from 'prop-types';
// import { List } from 'antd';
// import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import CouponSection from '../../../components/items/CouponSection';
import { promotionsSelectors } from '../../../redux/promotions/selectors';
import { redirectToPromotions } from '../../../redux/promotions/actions';

const ListCoupons = () => {
  const promotions = useSelector(promotionsSelectors.getDataArr);
  const dispatch = useDispatch();
  const onPressBuyNow = data => {
    dispatch(redirectToPromotions(data));
  };
  return promotions.map((item, index) => (
    <CouponSection
      onPressBuyNow={onPressBuyNow}
      key={String(index)}
      item={item}
      index={index}
    />
  ));
};
ListCoupons.propTypes = {};

export default ListCoupons;
