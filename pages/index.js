import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadData } from '../redux/placeholder/actions';

import Home from '../containers/Home';

function HomeIndex(props) {
  return <Home {...props} />;
}

HomeIndex.propTypes = {
  startClock: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({});

HomeIndex.getInitialProps = async ({ ctx: { store } }) => {
  // store.dispatch(countIncrease());
  if (!store.getState().placeholder.data) {
    store.dispatch(loadData());
  }
};

export default connect(
  null,
  mapDispatchToProps
)(HomeIndex);
