import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { MobileTabBarWrapper } from './styles';

const MobileTabBar = ({ tabs, children }) => (
  <MobileTabBarWrapper tabs={tabs}>
    {tabs.map(e => (
      <input
        style={{ display: 'none' }}
        key={e.key}
        defaultChecked={e.default}
        name="tab"
        type="radio"
        id={e.key}
      />
    ))}
    <div className="mobileTab">
      {tabs.map(tab => (
        // eslint-disable-next-line
        <label key={tab.key} className={`tabIcon ${tab.key}`} htmlFor={tab.key}>
          <Icon type={tab.icon} />
        </label>
      ))}
    </div>
    <div className="content">{children}</div>
  </MobileTabBarWrapper>
);

MobileTabBar.propTypes = {
  tabs: PropTypes.array,
  children: PropTypes.any,
};

export default MobileTabBar;
