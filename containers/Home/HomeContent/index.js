import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';
import i18next from 'i18next';
import ListRefundBrands from '../ListRefundBrands';
import ListCoupons from '../ListCoupons';
import { HomeContentWrapper } from './styles';
import { changeHomeTab } from '../../../redux/app/actions';

const HomeContent = props => {
  const homeTabIndex = useSelector(state => state.app.homeTabIndex);
  const dispatch = useDispatch();
  return (
    <HomeContentWrapper {...props}>
      <h1 className="sectionTitle">{i18next.t('home.all')}</h1>
      <Tabs onChange={e => dispatch(changeHomeTab(e))} activeKey={homeTabIndex}>
        <Tabs.TabPane tab={i18next.t('home.refunds')} key="1">
          <ListRefundBrands />
        </Tabs.TabPane>
        <Tabs.TabPane tab={i18next.t('home.coupons')} key="2">
          <ListCoupons />
        </Tabs.TabPane>
      </Tabs>
    </HomeContentWrapper>
  );
};

HomeContent.propTypes = {};

export default HomeContent;
