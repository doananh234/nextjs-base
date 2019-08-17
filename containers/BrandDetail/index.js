import React from 'react';
// import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import BasicLayout from '../../components/layout/BasicLayout';
import Footer from '../../components/layout/Footer';
import BrandInfo from './BrandInfo';
import BrandBanner from './BrandBanner';
import Coupons from './Coupons';
import RefundRules from './RefundRules';
import { brandsSelectors } from '../../redux/brands/selectors';

export default function BrandDetail() {
  const brand = useSelector(brandsSelectors.getCurrentData);
  return (
    <BasicLayout isDetailPage title={brand.name}>
      <div className="content">
        <Row type="flex">
          <Col xs={24} md={24} lg={7}>
            <BrandInfo />
            <Footer />
          </Col>
          <Col xs={24} md={24} lg={10}>
            <BrandBanner />
            <Coupons />
          </Col>
          <Col order={0} xs={24} md={24} lg={7}>
            <RefundRules />
          </Col>
        </Row>
      </div>
    </BasicLayout>
  );
}

BrandDetail.propTypes = {};
