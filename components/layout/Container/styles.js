import styled from 'styled-components';
import { Layout } from 'antd';

export const ContainerWrapper = styled(Layout)`
  & > * {
    transition: all 0.3s ease-in-out;
  }

  ul {
    padding-inline-start: 0px;
    & > li {
      list-style: none;
    }
  }
  .sectionTitle {
    font-size: 24px;
    padding: 20px;
    margin-top: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.text.title};
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .ant-card {
    &.noPadding {
      .ant-card-body {
        padding: 0px;
      }
    }
  }
  .ant-tabs-ink-bar {
    height: 5px;
  }
  .row {
    display: flex;
  }
  .ant-anchor-wrapper {
    background: transparent;
  }
  .ant-anchor-ink {
    display: none;
  }

  .hiddenCheckbox {
    display: none;
  }
  .ant-layout-content {
    padding-top: 64px;
  }

  .ant-list-item {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  @media (max-width: 768px) {
    .ant-affix {
      position: relative !important;
    }
  }
`;
