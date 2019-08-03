import React from 'react';
// Import custom components
import { connect } from 'react-redux';
// import store from '../../../store';
// import { changeCurrency } from '../../../actions';
import { HeaderWrapper } from './styles';
import LeftHeader from '../LeftHeader';
import CenterHeader from '../CenterHeader';
import RightHeader from '../RightHeader';

const Header = () => (
  <HeaderWrapper>
    <LeftHeader />
    <CenterHeader />
    <RightHeader />
  </HeaderWrapper>
);

Header.defaultProps = {};

export default connect(
  null
  // { changeCurrency },
)(Header);
