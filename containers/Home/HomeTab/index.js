import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import BasicLayout from '../../../components/layout/BasicLayout';
import Banner from '../Banner/index';
import Categories from '../Categories';
import UserInfo from '../UserInfo';
import HomeTabContent from '../HomeTabContent';
import Ranking from '../Ranking';
import AppStore from '../AppStore';

const HomeTab = props => (
  <BasicLayout>
    <Banner />
    <Row type='flex'>
      <Col xs={24} md={12} lg={6}>
        <UserInfo isHiddenMobile />
        <Categories />
      </Col>
      <Col xs={24} md={12} lg={10}>
        <HomeTabContent />
      </Col>
      <Col xs={24} md={24} lg={8}>
      <Row type='flex'>
        <Col xs={24} md={12} lg={24}>
          <Ranking isHiddenMobile />
        </Col>
        <Col xs={24} md={12} lg={24}>
          <AppStore />
        </Col>
      </Row>
      </Col>
    </Row>
  </BasicLayout>
);
HomeTab.propTypes = {};

export default HomeTab;
