import styled from 'styled-components';

export const TextWrapper = styled.div`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/static/assets/fonts/Inter-Regular.woff2') format('woff2'),
      url('Inter-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/static/assets/fonts/Inter-Medium.woff2') format('woff2'),
      url('/static/assets/fonts/Inter-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/static/assets/fonts/Inter-SemiBold.woff2') format('woff2'),
      url('/static/assets/fonts/Inter-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter-Bold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/static/assets/fonts/Inter-Bold.woff2') format('woff2'),
      url('/static/assets/fonts/Inter-Bold.woff') format('woff');
  }

  & > * {
    font-family: Inter;
    font-size: 14px;
  }

  .txtBold {
    font-family: 'Inter-Bold';
  }

  .txtMedium {
    font-family: 'Inter-Medium';
  }

  .txtSemiBold {
    font-family: 'Inter-SemiBold';
  }

  .txtBold {
    font-family: 'Inter-Bold';
  }

  .underline {
    text-decoration: underline;
    &.a {
      text-decoration: underline;
    }
  }
  .text {
    font-family: 'Inter-Bold';
    font-size: 14px;
  }

  .title {
    font-family: 'Inter-Bold';
    font-size: 24px;
  }

  .headline {
    font-family: 'Inter-Bold';
    font-size: 18px;
  }

  .ant-card-head-title {
    font-family: 'Inter-Bold';
    font-size: 20px;
  }
  .ant-tabs-tab {
    font-family: 'Inter-Bold';
    font-size: 18px;
    color: ${({ theme }) => theme.text.title};
    opacity: 0.3;
  }
  .ant-tabs-tab-active {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }
`;
