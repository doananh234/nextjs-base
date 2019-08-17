import styled from 'styled-components';

export const CenterHeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-tabs {
    padding: 0px 20px;
    height: 100%;
    .ant-tabs-bar {
      border: none;
    }
    .ant-tabs-nav-scroll {
      text-align: center;
      .ant-tabs-tab {
        color: white;
        opacity: 0.3;
        padding: 18px 40px;
        margin-bottom: 0px;
        &.ant-tabs-tab-active {
          opacity: 1;
        }
      }
      .ant-tabs-ink-bar {
        background: white;
      }
    }
  }
`;
