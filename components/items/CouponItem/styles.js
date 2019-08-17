import styled from 'styled-components';

export const CouponItemWrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  .txtTitle {
    flex: 1;
    font-size: 14px;
    font-family: 'Inter-Bold';
    color: ${({ theme }) => theme.text.title};
  }
  .lbDescription {
    color: ${({ theme }) => theme.primary};
    margin-right: 25px;
    line-height: 1.499;
  }
  .textRealValue {
    font-family: 'Inter';
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.text.title};
    text-decoration-line: line-through;
    padding-right: 20px;
  }

  .txtValue {
    font-size: 17px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
  }
`;
