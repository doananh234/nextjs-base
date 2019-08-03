import styled from 'styled-components';
import { Layout } from 'antd';

export const HeaderWrapper = styled(Layout.Header)`
  display: flex;
  width: 100%;
  margin-top: 0px;
  .logo {
    height: 40px;
  }
  @media (max-width: 577px) {
    margin-top: -64px;
  }
`;
