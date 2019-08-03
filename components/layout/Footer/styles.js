import styled from 'styled-components';
import { Layout } from 'antd';

export const FooterWrapper = styled(Layout.Footer)`
  margin-top: 20px;
  .copyright {
    text-align: center;
    color: ${({ theme }) => theme.text.primary};
  }
  .footerContent {
    padding: 20px 0px;
  }
  .socialView {
    display: flex;
    padding-inline-start: 0px;
    & > li {
      list-style: none;
      font-size: 30px;
      margin-right: 10px;
      color: ${({ theme }) => theme.primary};
    }
  }
  .footer-title {
    color: ${({ theme }) => theme.text.primary};
    text-transform: uppercase;
    font-weight: 700;
  }
  .contact-list {
    li {
      a {
        position: relative;
        display: inherit;
        padding-top: 13px;
        text-transform: capitalize;
        font-size: 14px;
        color: ${({ theme }) => theme.text.text};
        &:before {
          position: absolute;
          top: 35px;
          content: '';
          height: 2px;
          width: 0;
          background-color: ${({ theme }) => theme.primary};
          -webkit-transition: 0.5s ease;
          transition: 0.5s ease;
        }
        &:hover {
          &:before {
            width: 50px;
          }
        }
      }
    }
  }
`;
