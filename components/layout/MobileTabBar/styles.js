import styled from 'styled-components';

export const MobileTabBarWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.background.content};
  & > .ant-tabs {
    background: ${({ theme }) => theme.background.content};
    & > .ant-tabs-bar {
      background: ${({ theme }) => theme.background.container};
      position: fixed;
      left: 0;
      right: 0;
      bottom: -60px;
      transition: all 0.3s ease-in-out;

      @media (max-width: 577px) {
        bottom: 0px;
        .ant-tabs-nav-container {
          display: flex;
          width: 100vh;
        }
        .ant-tabs-tab {
          flex: 1;
        }
        .ant-tabs-nav {
          width: 100vw;
          > div {
            width: 100%;
            display: flex;
            text-align: center;
          }
          .tabIcon {
            font-size: 20px;
          }
        }
      }
    }
    @media (max-width: 577px) {
      height: 100%;
      padding-bottom: 40px;
    }
  }
  @media (max-width: 577px) {
    footer {
      display: none;
    }
  }
`;
