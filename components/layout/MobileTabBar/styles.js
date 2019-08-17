import styled from 'styled-components';

const makeMobileTabStyle = ({ theme, tabs }) => {
  const str = tabs
    .map(
      e => `
        #${e.key}:checked ~ .mobileTab .tabIcon.${e.key} {
          color: ${theme.primary};
        }

        [class*="-MobileTab"] {
          display: none;
        }

        #${e.key}:checked ~ .content .${e.key} {
          display: block;
        }`
    )
    .join('\n');
  return str;
};

export const MobileTabBarWrapper = styled.div`
  .mobileTab {
    flex: 1;
    width: 100wh;
    z-index: 2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    bottom: -60px;
    background: ${({ theme }) => theme.background.container};
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
      bottom: 0px;
      [class*='-MobileTab'] {
        display: block;
      }
    }
  }

  .tabIcon {
    flex: 1;
    font-size: 24px;
    text-align: center;
  }

  @media (max-width: 768px) {
    ${makeMobileTabStyle};
    height: 100vh;
    overflow: hidden;
    .ant-layout {
      height: 100vh;
      overflow: hidden;
      .ant-layout-header {
        top: -64px;
      }
      .ant-layout-content {
        overflow: auto;
        padding-top: 0px;
        margin-bottom: 64px;
      }
      .ant-layout-footer {
        display: none;
      }
    }

    .tabIcon {
      padding: 12px 16px;
    }
  }
`;

// ${'' /* #homeTab:checked ~ .mobileTab {
//   .tabIcon {
//     &.homeTab {
//       color: ${({ theme }) => theme.primary};
//     }
//   }
// }

// #homeTab:checked ~ .content {
//   [class*='Tab'] {
//     display: none;
//   }
//   .homeTab {
//     display: block;
//   }
// }

// #trophyTab:checked ~ .mobileTab {
//   .tabIcon {
//     &.trophyTab {
//       color: ${({ theme }) => theme.primary};
//     }
//   }
// }

// #trophyTab:checked ~ .content {
//   [class*='Tab'] {
//     display: none;
//   }
//   .trophyTab {
//     display: block;
//   }
// }

// #giftTab:checked ~ .mobileTab {
//   .tabIcon {
//     &.giftTab {
//       color: ${({ theme }) => theme.primary};
//     }
//   }
// }

// #giftTab:checked ~ .content {
//   [class*='Tab'] {
//     display: none;
//   }
//   .giftTab {
//     display: block;
//   }
// }

// #userTab:checked ~ .mobileTab {
//   .tabIcon {
//     &.userTab {
//       color: ${({ theme }) => theme.primary};
//     }
//   }
// }

// #userTab:checked ~ .content {
//   [class*='Tab'] {
//     display: none;
//   }
//   .userTab {
//     display: block;
//   }
// } */}
