import styled from 'styled-components';

export const RightHeaderWrapper = styled.div`
  flex: 1;
  text-align: right;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  display: flex;
  .btnDownload {
    display: flex;
    border-radius: 4px;
    padding: 0px 20px;
    align-items: center;
    background: transparent;
    color: white;
    font-family: 'Inter-Bold';
    font-size: 14px;
    border: 1px solid white;
    path {
      fill: white;
    }
    .svgIcon {
      margin-right: 24px;
    }
    &:hover {
      &.btn-solid {
        color: ${({ theme }) => theme.primary};
        ${'' /* background: white; */}
        path {
          fill: ${({ theme }) => theme.primary} !important;
        }
      }
    }
  }

  @media (max-width: 860px) {
    .btnDownload {
      .txtButton {
        display: none;
      }
      .svgIcon {
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }
`;
