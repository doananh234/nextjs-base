import styled from 'styled-components';

export const InfoItemWrapper = styled.div`
  display: flex;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.border.default};
  align-items: center;
  &:first-child {
    border-top: none;
  }
  .vLeft {
    width: 55px;
    text-align: center;
    .icInfo {
      font-size: 50px;
    }
  }
  .vCenter {
    flex: 1;
    padding-left: 10px;
    .txtTitle {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.text.title};
    }
    .txtValue {
      font-size: 20px;
      font-weight: bold;
      color: ${({ theme }) => theme.primary};
    }
  }
  .vRight {
    font-size: 20px;
  }

  @media (max-width: 577px) {
  }
`;
