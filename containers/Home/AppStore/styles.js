import styled from 'styled-components';

export const RankingWrapper = styled.section`
  padding: 20px;
  background: ${({ theme }) => theme.background.content};
  img {
    width: 200px;
    height: 200px;
    margin: auto;
    margin-bottom: 10px;
  }
  .imgStore {
    width: 100%;
    height: 65px;
    object-fit: contain;
  }
  .ant-card-body {
    text-align: center;
  }
  @media (max-width: 992px) {
    padding-top: 0px;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;
