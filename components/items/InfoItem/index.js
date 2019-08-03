import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { InfoItemWrapper } from './styles';

const InfoItem = ({ item, isShowArrow }) => (
  <InfoItemWrapper>
    <div className="vLeft">
      <Icon className="icInfo" type={item.icon} />
    </div>
    <div className="vCenter">
      <div className="txtTitle">{item.title}</div>
      <div className="txtValue">{item.value}</div>
    </div>
    {isShowArrow && <Icon className="vRight" type="right" />}
  </InfoItemWrapper>
);
InfoItem.propTypes = {
  item: PropTypes.object,
  isShowArrow: PropTypes.bool,
};

InfoItem.defaultProps = {
  isShowArrow: true,
};

export default InfoItem;
