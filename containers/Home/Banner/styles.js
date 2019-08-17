import styled from 'styled-components';

export const BannerWrapper = styled.section`
  padding-bottom: 20px;
  .ant-carousel {
    .slick-dots {
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
    .sectionTitle {
      display: block;
    }
  }
`;
