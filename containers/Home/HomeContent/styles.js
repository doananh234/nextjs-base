import styled from 'styled-components';

export const HomeContentWrapper = styled.section`
  .ant-tabs {
    padding: 20px 0px;
    .ant-tabs-bar {
      border: none;
      display: none;
    }
  }
  @media (max-width: 768px) {
    .ant-tabs {
      padding: 0px;
      .ant-tabs-bar {
        padding: 0px 20px 40px 20px;
      }
      .ant-tabs-bar {
        display: block;
      }
    }
    .content {
      display: none;
    }
    #homeTab:checked ~ .content {
      display: block;
    }
  }
`;
