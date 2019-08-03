import styled from 'styled-components';

export const CategoriesWrapper = styled.section`
  margin: 20px;
  background: ${({ theme }) => theme.background.container};
  border-radius: 20px;
  @media (max-width: 577px) {
    background: transparent;
    width: auto;
    margin-left: 0px;
    .categoryGroup {
      padding: 0px 5px;
      height: 300px;
      .ant-card {
        height: 100%;
      }
    }
  }
`;
