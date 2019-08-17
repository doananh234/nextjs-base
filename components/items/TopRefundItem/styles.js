import styled from 'styled-components';

export const TopRefundItemWrapper = styled.div`
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.border.default};
  width: 100%;

  &:first-child {
    border-top: none;
  }

  .txtTitle {
    font-size: 14px;
    font-family: 'Inter-bold';
    color: ${({ theme }) => theme.text.title};
  }

  .vContent {
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    .txtValue {
      font-size: 18px;
      font-family: 'Inter-bold';
      color: ${({ theme }) => theme.primary};
    }
    .txtProductCount {
      color: ${({ theme }) => theme.text.title};
    }
  }

  @media (max-width: 768px) {
  }
`;
