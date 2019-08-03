import styled from 'styled-components';

export const CategoriesWrapper = styled.section`
  padding:0px 20px;
  @media (max-width: 768px) {
    background: transparent;
    width: auto;
    .categoryGroup {
      padding: 0px 5px;
      height: 260px;
      .ant-card {
        height: 100%;
        padding: 10px 0px;
      }
    }
  }
`;
