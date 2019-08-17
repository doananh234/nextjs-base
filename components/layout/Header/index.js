import React, { useEffect, useRef } from 'react';
// Import custom components
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { Layout } from 'antd';
// import store from '../../../store';
// import { changeCurrency } from '../../../actions';
import { HeaderWrapper } from './styles';
import LeftHeader from '../LeftHeader';
import CenterHeader from '../CenterHeader';
import RightHeader from '../RightHeader';

const Header = ({ isDetailPage, title }) => {
  const navRef = useRef();
  const handleScroll = () => {
    const lastScrollY = window.scrollY;
    if (navRef.current && !isDetailPage) {
      navRef.current.checked = lastScrollY > 500;
    }
    if (isDetailPage) {
      navRef.current.checked = true;
    }
    // navRef.current.props.className +=' stick';
    // if (!stick) {
    //   lastScrollY > 500 && setStick(true);
    // } else {
    //   stick && setStick(false);
    // }
  };

  useEffect(() => {
    if (isDetailPage) return;
    const debounceHandleScroll = debounce(handleScroll, 20);
    window.addEventListener('scroll', debounceHandleScroll, true);
    return () => {
      window.removeEventListener('scroll', debounceHandleScroll);
    };
  }, []);
  return (
    <HeaderWrapper>
      <input
        id="headerTracker"
        type="checkbox"
        className="hiddenCheckbox"
        ref={navRef}
        defaultChecked={isDetailPage}
      />
      <Layout.Header>
        <LeftHeader title={title} isDetailPage={isDetailPage} />
        {!isDetailPage && <CenterHeader />}
        <RightHeader />
      </Layout.Header>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isDetailPage: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  isDetailPage: false,
  title: '',
};

export default connect(
  null
  // { changeCurrency },
)(Header);
