import React from 'react';
// import PropTypes from 'prop-types';
// import { List } from 'antd';
// import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import BrandSection from '../../../components/items/BrandSection';
import { brandsSelectors } from '../../../redux/brands/selectors';
import { redirectToPromotions } from '../../../redux/promotions/actions';

const ListRefundBrands = () => {
  const brands = useSelector(brandsSelectors.getDataArr);
  const dispatch = useDispatch();
  const onPressBuyNow = data => {
    dispatch(redirectToPromotions(data));
  };

  return brands.map((item, index) => (
    <BrandSection
      onPressBuyNow={onPressBuyNow}
      key={String(index)}
      item={item}
      index={index}
    />
  ));
};

ListRefundBrands.propTypes = {};

export default ListRefundBrands;
