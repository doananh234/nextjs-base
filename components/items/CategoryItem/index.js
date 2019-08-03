import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { CategoryItemWrapper } from './styles';

const CategoryItem = ({ item }) => (
  <CategoryItemWrapper>
    <Icon
      theme="twoTone"
      twoToneColor="#cc3366"
      className="icCategory"
      type={item.icon}
    />
    <br />
    <span className="txtName">{item.title}</span>
  </CategoryItemWrapper>
);
CategoryItem.propTypes = {
  item: PropTypes.object,
};

export default CategoryItem;
