import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Icon } from 'antd';
import { MobileTabBarWrapper } from './styles';

const MobileTabBar = ({ tabs }) => (
  <MobileTabBarWrapper>
    <Tabs tabPosition="bottom" defaultActiveKey={tabs[0].key}>
      {tabs.map(tab => (
        <Tabs.TabPane
          tab={<Icon className="tabIcon" type={tab.icon} />}
          key={tab.key}
        >
          {tab.component}
        </Tabs.TabPane>
      ))}
    </Tabs>
  </MobileTabBarWrapper>
);

MobileTabBar.propTypes = {
  tabs: PropTypes.array,
};

export default MobileTabBar;
