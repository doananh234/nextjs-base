import styled from 'styled-components';

export const BrandSectionWrapper = styled.div`
  margin: 0px 20px 40px 20px;
  .logoTitle {
    height: 36px;
  }
  .banner {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .ant-card-body {
    padding: 0px;
  }
  .btnSeeMore {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    span {
      flex: 1;
    }
    .svgIcon {
      path {
        fill: ${({ theme }) => theme.primary};
      }
    }
  }
  @media (max-width: 768px) {
  }
`;
