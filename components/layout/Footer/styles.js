import styled from 'styled-components';
import { Layout } from 'antd';

export const FooterWrapper = styled(Layout.Footer)`
  background: transparent;
  font-size: 12px;
  color: ${({ theme }) => theme.text.title};
  & > a {
    color: ${({ theme }) => theme.text.title};
  }
  &.ant-layout-footer {
    padding: 20px;
  }
`;
