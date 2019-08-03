import styled from 'styled-components';

export const RankingItemWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 20px;
  align-items: center;
  &:first-child {
    border-top: none;
  }
  .vLeft {
    font-size: 17px;
    font-weight: 600;
    padding-right: 10px;
  }
  .avatar {
    background: ${({theme}) => theme.background.content};
    width: 50px;
    height: 50px;
  }
  .vCenter {
    flex: 1;
    padding-left: 10px;
  }
  .vRight {
    text-align: right;
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

  @media (max-width: 577px) {
  }
`;
