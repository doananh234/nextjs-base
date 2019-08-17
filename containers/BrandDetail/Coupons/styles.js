import styled from 'styled-components';

export const CouponsWrapper = styled.div`
  padding: 0px 20px 20px 20px;
  .noPadding {
    margin-bottom: 20px;
  }
  .ant-tabs-bar {
    margin: 0px;
  }
  .ant-tabs-nav {
    width: 100%;
    text-align: center;
    .ant-tabs-tab {
      width: 50%;
      margin: 0px;

      @media (max-width: 986px) {
        font-size: 15px;
      }
    }
  }
  .ant-tabs-ink-bar {
    width: 50%;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 986px) {
    padding: 0px 20px 20px 20px;
  }
`;
