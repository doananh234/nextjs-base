import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { InfoItemWrapper } from './styles';
import SVGIcon from '../../SVGIcon';

const InfoItem = ({ item }) => (
  <InfoItemWrapper>
    <div className="vLeft">
      {item.image && <img alt={item.image} src={item.image} />}
      {item.avatar && <Avatar size={60} src={item.avatar} />}
      {item.icon && <SVGIcon size={35} className="icInfo" name={item.icon} />}
    </div>
    <div className="vCenter">
      <div className="txtTitle">{item.title}</div>
      <div className="txtValue">{item.value}</div>
      <div className="txtDescription">{item.description}</div>
    </div>
  </InfoItemWrapper>
);

InfoItem.propTypes = {
  item: PropTypes.object,
};

InfoItem.defaultProps = {};

export default InfoItem;
