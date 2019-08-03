import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import i18next from 'i18next';
import { BrandItemWrapper } from './styles';

const BrandItem = ({ item, suffix, isShowArrow }) => (
  <BrandItemWrapper>
    <div className="vCenter">
      <Icon className="icInfo" type={item.icon || 'reddit'} />
      <div className="txtTitle">
        <span className="txtValue">{item.value}</span> 
        {` ${suffix}`}
      </div>
    </div>
   <Icon className="vRight" type="right" />
  </BrandItemWrapper>
);
BrandItem.propTypes = {
  item: PropTypes.object,
  suffix: PropTypes.string,
};

BrandItem.defaultProps = {
};

export default BrandItem;
