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
    display: flex;
    .icInfo {
      font-size: 50px;
    }
  }
  .vCenter {
    flex: 1;
    padding-left: 15px;
    .txtTitle {
      font-size: 14px;
      font-family: 'Inter-bold';
      color: ${({ theme }) => theme.text.title};
    }
    .txtValue {
      font-size: 18px;
      font-family: 'Inter-bold';
      color: ${({ theme }) => theme.primary};
    }
    .txtDescription {
      font-size: 13px;
      font-family: 'Inter';
      color: ${({ theme }) => theme.text.title};
    }
  }
  .vRight {
    font-size: 20px;
  }

  @media (max-width: 768px) {
  }
`;
