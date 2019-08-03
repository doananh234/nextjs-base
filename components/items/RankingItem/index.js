import React from 'react';
import PropTypes from 'prop-types';
import {  Avatar } from 'antd';
import { RankingItemWrapper } from './styles';

const RankingItem = ({ item, index }) => (
  <RankingItemWrapper>
    <div className="vLeft">
      #{index}
    </div>
    <Avatar className='avatar' src={item.avatar} />
    <div className="vCenter">
      {item.name}
    </div>
    <div className="vRight">
      <div className="txtValue">{item.value}</div>
      <div className="txtUnit">{item.unit}</div>
    </div>
  </RankingItemWrapper>
);
RankingItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

RankingItem.defaultProps = {
};

export default RankingItem;
