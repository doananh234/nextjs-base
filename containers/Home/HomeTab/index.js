import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Banner from '../Banner/index';
import Container from '../../../components/layout/Container';
import Categories from '../Categories';
import UserInfo from '../UserInfo';
import HomeTabContent from '../HomeTabContent';

const HomeTab = props => (
  <Container>
    <Banner />
    <Row gutter={16}>
      <Col sm={24} md={6}>
        <UserInfo />
        <Categories />
      </Col>
      <Col sm={24} md={10}>
        <HomeTabContent />
      </Col>
      <Col sm={24} md={8}>
        <UserInfo />
        <Categories />
      </Col>
    </Row>
  </Container>
);
HomeTab.propTypes = {};

export default HomeTab;
