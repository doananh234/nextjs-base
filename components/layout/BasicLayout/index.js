import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/dist/antd.less';

import Header from '../Header';
import Container from '../Container';
import Footer from '../Footer';
import { LayoutWrapper } from './styles';
import '../../../i18n';

const BasicLayout = ({ children }) => (
  <Container>
    <LayoutWrapper>
      <Header />
      <Layout.Content>
        {children}
        <Footer />
      </Layout.Content>
    </LayoutWrapper>
  </Container>
);
BasicLayout.propTypes = {
  children: PropTypes.any,
};

export default BasicLayout;
