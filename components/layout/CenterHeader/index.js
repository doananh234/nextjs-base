import React from 'react';
// import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import { CenterHeaderWrapper } from './styles';
import { changeHomeTab } from '../../../redux/app/actions';

const CenterHeader = () => {
  const homeTabIndex = useSelector(state => state.app.homeTabIndex);
  const dispatch = useDispatch();
  return (
    <CenterHeaderWrapper>
      <Tabs onChange={e => dispatch(changeHomeTab(e))} activeKey={homeTabIndex}>
        <Tabs.TabPane
          tab={<span className="headline">{i18next.t('home.refunds')}</span>}
          key="1"
        />
        <Tabs.TabPane
          tab={<span className="headline">{i18next.t('home.coupons')}</span>}
          key="2"
        />
      </Tabs>
    </CenterHeaderWrapper>
  );
};
CenterHeader.propTypes = {};

export default CenterHeader;
