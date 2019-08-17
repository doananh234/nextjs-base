import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { CategoryItemWrapper } from './styles';

const CategoryItem = ({ item }) => {
  const { url } = item?.logo?.sizes?.sm || {};
  return (
    <Link href="/category/[id]" as={`/category/${item._id}`}>
      <CategoryItemWrapper>
        <img alt={url} className="icCategory" src={url} />
        <br />
        <span className="txtName">{item.name}</span>
      </CategoryItemWrapper>
    </Link>
  );
};
CategoryItem.propTypes = {
  item: PropTypes.object,
};

export default CategoryItem;
