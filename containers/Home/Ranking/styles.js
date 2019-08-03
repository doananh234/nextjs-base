import styled from 'styled-components';

export const RankingWrapper = styled.section`
  padding: 20px 20px 0px 20px;
  .txtHeader {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme })=> theme.primary};
  }
  @media (max-width: 577px) {
    display: ${({ isHiddenMobile }) => (isHiddenMobile ?  'none' : 'block')};
  }
`;
