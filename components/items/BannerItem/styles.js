import styled from 'styled-components';

export const BannerItemWrapper = styled.div`
  .bannerContainer {
    flex: 1;
    padding: 10%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    width: 100%;
    height: 500px;
  }
  .content {
    h1 {
      font-size: 40px;
      font-weight: 600;
      @media (max-width: 577px) {
        font-size: 20px;
        width: 80%;
      }
    }

    p {
      font-size: 20px;
      @media (max-width: 577px) {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 577px) {
    .bannerContainer {
      border-radius: 15px;
      height: 200px;
    }
    padding: 7.5px;
  }
`;
