import React from 'react';
import PropTypes from 'prop-types';

const StickView = ({ children }) => <div>{children}</div>;
StickView.propTypes = {
  children: PropTypes.any,
};

export default StickView;
