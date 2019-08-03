import styled from 'styled-components';

export const BrandItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 15px;
  margin: 0px 15px 15px 0px;
  width: 250px;
  min-width: 250px;
  height: 120px;
  background: ${({ theme }) => theme.background.container};
  align-items: center;
  .vCenter {
    flex: 1;
    padding-left: 10px;
    .icInfo {
      font-size: 50px;
      color: ${({ theme }) => theme.primary};
    }
    .txtTitle {
      font-size: 16px;
      padding-top: 20px;
      font-weight: 300;
      color: ${({ theme }) => theme.text.text};
    }
    .txtValue {
      font-size: 16px;
      font-weight: bold;
      color: ${({ theme }) => theme.text.title};
    }
  }
  .vRight {
    font-size: 20px;
  }

  @media (max-width: 577px) {
  }
`;
