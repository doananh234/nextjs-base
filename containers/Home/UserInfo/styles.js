import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  margin: 20px;
  @media (max-width: 577px) {
    margin-top: 50px;
    display: ${({ isHiddenMobile }) => (isHiddenMobile ?  'none': 'block')};
  }
  .settings {
    margin-top: 20px;
    @media (max-width: 577px) {
    margin-top: 0px;
  }
  }
  .btnLogout {
    margin: 20px 0px 0px 0px;
    .ant-btn {
      width: 100%;
      height: 60px;
      border: none;
      border-radius: 15px;
      font-weight: 600px;
      font-size: 17px;
      .anticon {
        color: ${({theme}) => theme.primary};
      }
    }
  }
`;
