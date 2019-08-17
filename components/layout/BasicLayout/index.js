import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/dist/antd.less';

import Header from '../Header';
import Container from '../Container';
import { LayoutWrapper } from './styles';
import '../../../i18n';
import SignInModal from '../SignInModal';

const BasicLayout = ({ children, isDetailPage, title, ...props }) => (
  <Container>
    <LayoutWrapper>
      <Header title={title} isDetailPage={isDetailPage} />
      <Layout.Content {...props}>{children}</Layout.Content>
      <SignInModal />
    </LayoutWrapper>
  </Container>
);
BasicLayout.propTypes = {
  children: PropTypes.any,
  isDetailPage: PropTypes.bool,
  title: PropTypes.string,
};

export default BasicLayout;
