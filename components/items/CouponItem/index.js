import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { CouponItemWrapper } from './styles';

const CouponItem = ({ item,prefix, isShowArrow }) => (
  <CouponItemWrapper>
      <div className="txtTitle">
        {item.name}
      </div>
      <div className="lbDescription">
        {prefix || 'Hoàn tiền'}
      </div>
      <span className="txtValue">{item.value} {item.unit}</span> 
  </CouponItemWrapper>
);
CouponItem.propTypes = {
  item: PropTypes.object,
  prefix: PropTypes.string
};

CouponItem.defaultProps = {
};

export default CouponItem;
