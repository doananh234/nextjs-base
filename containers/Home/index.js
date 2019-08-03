import React from 'react';
// import PropTypes from 'prop-types';
import MobileTabBar from '../../components/layout/MobileTabBar';
import HomeTab from './HomeTab';
import UserInfo from './UserInfo';
import Ranking from './Ranking';

export default function Home() {
  const TABS = [
    {
      key: 'home',
      component: <HomeTab />,
      icon: 'home',
    },
    {
      key: 'trophy',
      component: <Ranking />,
      icon: 'trophy',
    },
    {
      key: 'gift',
      component: 'gift',
      icon: 'gift',
    },
    {
      key: 'user',
      component: <UserInfo />,
      icon: 'user',
    },
  ];

  return (<MobileTabBar tabs={TABS} />);
}

Home.propTypes = {};
