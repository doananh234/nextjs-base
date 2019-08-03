import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import i18next from 'i18next';
import { CenterHeaderWrapper } from './styles';

const NAVS = [
  {
    key: 'home',
    title: 'navs.home',
    href: '/',
  },
  {
    key: 'contact',
    title: 'navs.contact',
    href: '/contact',
  },
  {
    key: 'faq',
    title: 'navs.faq',
    href: '/faq',
  },
];

const CenterHeader = props => (
  <CenterHeaderWrapper>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[NAVS[0].key]}
      style={{ lineHeight: '64px' }}
    >
      {NAVS.map(data => (
        <Menu.Item key={data.key}>{i18next.t(data.title)}</Menu.Item>
      ))}
    </Menu>
  </CenterHeaderWrapper>
);
CenterHeader.propTypes = {};

export default CenterHeader;
