import styled from 'styled-components';

export const FooterSubscribeWrapper = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  .form-inline {
    display: flex;
  }
  .btnSubscribe {
  }
  .space {
    width: 20px;
    height: 20px;
  }
  .formInput {
    display: flex;
  }
`;
