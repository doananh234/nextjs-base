import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutWrapper = styled(Layout)`
  height: 100vh;
  overflow: hidden;
  @media (max-width: 577px) {
    height: 100%;
  }
`;
