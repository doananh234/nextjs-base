import styled from 'styled-components';

export const RankingWrapper = styled.section`
  padding: 20px;
  text-align: center;
  .txtTitle {
    font-size: 34px;
    font-weight: bold;
    color: ${({theme})=> theme.primary};
  }
  .txtDescription {
    font-size: 17px;
    color: ${({theme})=> theme.text.textLight};
    margin-top: 10px;
  }
  img {
    width: 200px;
    height: 200px;
    margin:auto;
    margin-top: 20px;
  }
  @media (max-width: 577px) {
  }
`;
