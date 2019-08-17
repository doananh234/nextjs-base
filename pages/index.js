import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Home from '../containers/Home';
import { getHomeData } from '../redux/home/actions';
import { getBrands } from '../redux/brands/actions';
import { getPromotions } from '../redux/promotions/actions';

function HomeIndex(props) {
  return <Home {...props} />;
}

HomeIndex.propTypes = {};

const mapDispatchToProps = () => ({});

HomeIndex.getInitialProps = async ({ ctx }) => {
  const { store, isServer } = ctx;
  // if (!store.getState().placeholder.data) {
  //   store.dispatch(loadData());
  // }

  // if (!store.getState().home?.categories) {
  //   store.dispatch(getHomeData());
  // }
  store.dispatch(getHomeData(ctx));
  store.dispatch(getBrands(ctx));
  store.dispatch(getPromotions(ctx));
  return { isServer };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeIndex);
