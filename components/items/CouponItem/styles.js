import styled from 'styled-components';

export const CouponItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 15px;
  margin: 0px 15px 15px 0px;
  height: 120px;
  min-width: 120px;
  width: 120px;
  background: ${({ theme }) => theme.background.container};
  .txtTitle {
      flex: 1;
      font-size: 13px;
      font-weight: 300;
      color: ${({ theme }) => theme.text.title};
    }
    .lbDescription {
      color: ${({ theme }) => theme.primary};
    }
    .txtValue {
      font-size: 17px;
      font-weight: bold;
      color: ${({ theme }) => theme.primary};
    }

  @media (max-width: 577px) {
  }
`;
