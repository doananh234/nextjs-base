import React from 'react';
// import PropTypes from 'prop-types';
import Banner from './Banner';
import Container from '../../components/layout/Container';
import MobileTabBar from '../../components/layout/MobileTabBar/index';
import HomeTab from './HomeTab/index';
import UserInfo from './UserInfo/index';

export default function Home() {
  const TABS = [
    {
      key: 'home',
      component: <HomeTab />,
      icon: 'home',
    },
    {
      key: 'history',
      component: 'history',
      icon: 'history',
    },
    {
      key: 'gift',
      component: 'gift',
      icon: 'gift',
    },
    {
      key: 'user',
      component: <UserInfo isUserTab />,
      icon: 'user',
    },
  ];

  return <MobileTabBar tabs={TABS} />;
}

Home.propTypes = {};
