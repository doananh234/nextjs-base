import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.less';
import { ContainerWrapper } from './styles';
import '../../../i18n';

const Container = ({ children }) => (
  <ContainerWrapper>
    {children}
  </ContainerWrapper>
);
Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
