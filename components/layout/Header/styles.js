import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .ant-layout-header {
    display: flex;
    width: 100%;
    margin-top: 0px;
    position: fixed;
    top: 0px;
    z-index: 2;
  }
  &.stick {
    background: white;
  }

  .logo {
    height: 40px;
  }

  #headerTracker:checked ~ .ant-layout-header {
    background: white;

    .title {
      color: ${({ theme }) => theme.primary};
    }

    path {
      fill: ${({ theme }) => theme.primary};
    }

    .ant-tabs {
      .ant-tabs-nav-scroll {
        .ant-tabs-tab {
          color: ${({ theme }) => theme.text.title};
          opacity: 0.3;
          padding: 18px 40px;
          margin-bottom: 0px;
          &.ant-tabs-tab-active {
            color: ${({ theme }) => theme.primary};
            opacity: 1;
          }
        }
        .ant-tabs-ink-bar {
          background: ${({ theme }) => theme.primary};
        }
      }
    }

    .btnDownload {
      border-color: ${({ theme }) => theme.primary};

      path {
        fill: white;
      }
      &.btn-solid {
        background-image: -webkit-linear-gradient(
          30deg,
          ${({ theme }) => theme.primary} 50%,
          transparent 0
        );
        background-image: -webkit-linear-gradient(
          60deg,
          ${({ theme }) => theme.primary} 50%,
          transparent 0
        );
        background-image: linear-gradient(
          30deg,
          ${({ theme }) => theme.primary} 50%,
          transparent 0
        );
      }

      &.btn-solid:hover {
        background-position: 100%;
        color: ${({ theme }) => theme.primary};
        background-color: white;
        path {
          fill: ${({ theme }) => theme.primary} !important;
        }
      }
    }
  }
`;
