import styled from 'styled-components';

export const BannerItemWrapper = styled.div`
  .bannerContainer {
    flex: 1;
    padding: 10%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
  }
  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .txtTitle {
      font-size: 75px;
      color: ${({ theme }) => theme.primary};
      letter-spacing: 0.375em;
      @media (max-width: 768px) {
        font-size: 20px;
        width: 80%;
      }
    }

    .txtDescription {
      color: ${({ theme }) => theme.primary};
      font-size: 30px;
      font-family: 'Inter-Bold';
      letter-spacing: 0.63em;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    .bannerContainer {
      border-radius: 15px;
      height: 200px;
    }
    padding: 7.5px;
  }
`;
