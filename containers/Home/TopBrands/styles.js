import styled from 'styled-components';

export const TopActivityWrapper = styled.section`
  padding: 20px;
  .txtHeader {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 992px) {
    padding-top: 0px;
  }
  @media (max-width: 768px) {
    padding-top: 20px;
    display: ${({ isHiddenMobile }) => (isHiddenMobile ? 'none' : 'block')};
  }
`;
