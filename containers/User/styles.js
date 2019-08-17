import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  margin: 20px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  .socialLogin {
    padding: 20px;
  }
  .settings {
    margin-top: 20px;
    display: none;
    @media (max-width: 768px) {
      display: block;
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
        color: ${({ theme }) => theme.primary};
      }
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const UnSignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .defaultUser {
    margin: 20px;
  }

  .socialBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 12px;
    border-radius: 4px;
  }

  .icWrapper {
    width: 38px;
    height: 38px;
    position: absolute;
    left: 1px;
    top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 24px;
  }

  .btnFB {
    width: 295px;
    min-height: 40px;
    background: #4267b2;
    flex: 1;
    margin: 20px 0px;
    width: auto;
    color: white;
  }

  .btnGoogle {
    width: 295px;
    min-height: 40px;
    background: #4285f4;
    flex: 1;
    width: auto;
    color: white;
    .icWrapper {
      background: white;
    }
  }
`;
