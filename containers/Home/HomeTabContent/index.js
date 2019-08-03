import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import i18next from 'i18next';
import ListRefundBrands from '../ListRefundBrands';
import ListCoupons from '../ListCoupons';
import { HomeTabContentWrapper } from './styles';

const HomeTabContent = props => (
  <HomeTabContentWrapper>
    <h1 className="sectionTitle">{i18next.t('home.all')}</h1>
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab={i18next.t('home.refunds')} key="1">
        <ListRefundBrands />
      </Tabs.TabPane>
      <Tabs.TabPane tab={i18next.t('home.coupons')} key="2">
        <ListCoupons />
      </Tabs.TabPane>
    </Tabs>
  </HomeTabContentWrapper>
);
HomeTabContent.propTypes = {};

export default HomeTabContent;
