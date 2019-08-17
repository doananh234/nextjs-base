import React from 'react';
// import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import MobileTabBar from '../../components/layout/MobileTabBar';
import BasicLayout from '../../components/layout/BasicLayout';
import Footer from '../../components/layout/Footer';
import Banner from './Banner';
import Categories from './Categories';
import UserInfo from '../User';
import HomeContent from './HomeContent';
import AppStore from './AppStore';
import TopBrands from './TopBrands';

export default function Home() {
  const TABS = [
    {
      key: 'home-MobileTab',
      icon: 'home',
      default: true,
    },
    {
      key: 'trophy-MobileTab',
      icon: 'trophy',
    },
    {
      key: 'gift-MobileTab',
      icon: 'gift',
    },
    {
      key: 'user-MobileTab',
      icon: 'user',
    },
  ];

  return (
    <MobileTabBar tabs={TABS}>
      <BasicLayout>
        <Banner className="home-MobileTab" />
        <Row type="flex">
          <Col xs={24} md={24} lg={7}>
            <UserInfo className="user-MobileTab" />
            <Categories className="home-MobileTab" />
            <Footer />
          </Col>
          <Col className="home-MobileTab" xs={24} md={24} lg={10}>
            <HomeContent />
          </Col>
          <Col xs={24} md={24} lg={7}>
            <Row type="flex">
              <Col className="trophy-MobileTab" xs={24} md={12} lg={24}>
                <TopBrands />
              </Col>
              <Col className="gift-MobileTab" xs={24} md={12} lg={24}>
                <AppStore />
              </Col>
            </Row>
          </Col>
        </Row>
      </BasicLayout>
    </MobileTabBar>
  );
}

Home.propTypes = {};
