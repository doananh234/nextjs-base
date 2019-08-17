import React from 'react';
// import PropTypes from 'prop-types';
import { getBrandsById } from '../../../redux/brands/actions';
import BrandDetailContainer from '../../../containers/BrandDetail';

function BrandDetail(props) {
  return <BrandDetailContainer {...props} />;
}

BrandDetail.propTypes = {};

BrandDetail.getInitialProps = async ({ ctx }) => {
  const { query, store } = ctx;
  const { id } = query;
  store.dispatch(getBrandsById(id, ctx));
};

export default BrandDetail;
