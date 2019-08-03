import styled from 'styled-components';
import { Card } from 'antd';

export const UserInfoWrapper = styled(Card)`
  background: ${({ theme }) => theme.background.container};
  margin: 20px;
  @media (max-width: 577px) {
    height: 100%;
    display: ${({ isUserTab }) => (isUserTab ? 'block' : 'none')};
  }
`;
