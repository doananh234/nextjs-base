import styled from 'styled-components';

export const BrandInfoWrapper = styled.div`
  margin: 20px 20px 0px 20px;
  .logo {
    height: 62px;
    width: 150px;
    border-radius: 10px;
    margin: auto;
    margin-top: -31px;
    img {
      background-color: white;
      padding: 10px 20px;
    }
  }

  .banner {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .brandContent {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    & > div {
      flex: 1;
      padding: 20px 10px;
      text-align: center;
    }
    .txtValue {
      font-size: 20px;
      color: ${({ theme }) => theme.primary};
    }
    .txtUnit {
      font-size: 12px;
    }
  }

  .btnSeeMore {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    font-size: 18px;
    color: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    &:hover {
      &.btn-solid {
        color: ${({ theme }) => theme.primary};
        path {
          fill: ${({ theme }) => theme.primary} !important;
        }
      }
    }
    span {
      flex: 1;
    }
    .svgIcon {
      path {
        fill: white;
      }
    }
  }
`;
