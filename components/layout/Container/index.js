import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/dist/antd.less';

import Header from '../Header';
import Footer from '../Footer';
import { LayoutWrapper } from './styles';
import '../../../i18n';
import MobileTabBar from '../MobileTabBar/index';

const Container = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Layout.Content>
      {children}
      <Footer />
    </Layout.Content>
  </LayoutWrapper>
);
Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
