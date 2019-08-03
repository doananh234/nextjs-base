import styled from 'styled-components';
import { Layout } from 'antd';

export const ContainerWrapper = styled(Layout)`
  & > * {
    transition: all 0.3s ease-in-out;
  }

  .ant-layout-content {
    overflow-y: auto;
    overflow-x: hidden;
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
    @media (max-width: 577px) {
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
`;
