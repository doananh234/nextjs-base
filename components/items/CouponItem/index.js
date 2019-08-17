import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { CouponItemWrapper } from './styles';
import CustomButton from '../../CustomButton';

const CouponItem = ({ onPressBuyNow, item, isRefundRate }) => {
  const onClick = () => {
    onPressBuyNow(item);
  };
  return (
    <CouponItemWrapper>
      <div className="txtTitle">{item.name}</div>
      <span className="lbDescription text">
        <span className="textRealValue">{item.realValue}</span>
        {isRefundRate ? item?.cashbackText : item?.statistic?.promotion}{' '}
        {isRefundRate ? '' : i18next.t('unit.coupon')}
      </span>
      <CustomButton onClick={onClick} type="link" className="seeMore">
        {i18next.t(isRefundRate ? 'buttons.buyNow' : 'buttons.seeMore')}
      </CustomButton>
    </CouponItemWrapper>
  );
};
CouponItem.propTypes = {
  item: PropTypes.object,
  isRefundRate: PropTypes.bool,
  onPressBuyNow: PropTypes.func,
};

CouponItem.defaultProps = {};

export default CouponItem;
