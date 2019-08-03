import React from 'react';
import PropTypes from 'prop-types';
import { LeftHeaderWrapper } from './styles';
import LogoImage from '../../LogoImage';

const LeftHeader = props => (
  <LeftHeaderWrapper>
    <LogoImage />
  </LeftHeaderWrapper>
);
LeftHeader.propTypes = {};

export default LeftHeader;
