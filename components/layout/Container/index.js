import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.less';
import { ContainerWrapper } from './styles';
import { TextWrapper } from './texts';
import '../../../i18n';

const Container = ({ children }) => (
  <TextWrapper>
    <ContainerWrapper>{children}</ContainerWrapper>
  </TextWrapper>
);
Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
