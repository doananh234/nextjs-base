import styled from 'styled-components';

export const BannerWrapper = styled.section`
  width: 100%;
  padding: 20px;
  .banner {
  }
  .ant-carousel {
    .slick-list {
      border-radius: 10px;
    }
    .slick-dots {
      position: relative;
      margin: 20px 0px;
      bottom: auto;
      li {
        button {
          background: ${({ theme }) => theme.shadow.heavyDark};
        }
        &.slick-active {
          button {
            opacity: 1;
            background: ${({ theme }) => theme.primary};
          }
        }
      }
    }
  }

  .sectionTitle {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    .sectionTitle {
      display: block;
    }
  }
`;
