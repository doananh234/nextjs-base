import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  color: ${({ theme }) => theme.text.title};
  font-size: 14px;
  font-family: 'Inter-Bold';
  display: flex;
  align-items: center;
  padding: 0px;
  .svgIcon {
    margin-left: 10px;
  }

  &.btn-solid {
    letter-spacing: 0.05em;
    background-image: -webkit-linear-gradient(
      30deg,
      ${({ theme }) => theme.primary} 50%,
      transparent 0
    );
    background-image: -webkit-linear-gradient(
      60deg,
      ${({ background }) => background || '#fff'} 50%,
      transparent 0
    );
    background-image: linear-gradient(
      30deg,
      ${({ background }) => background || '#fff'} 50%,
      transparent 0
    );
    background-size: ${({ width }) => width * 2 || '2000'}px;
    background-repeat: no-repeat;
    background-position: 0;
    -webkit-transition: background 0.3s ease-in-out;
    transition: background 0.3s ease-in-out;
  }

  &.btn-solid:hover {
    background-position: 100%;
    color: #fff;
    background-color: ${({ theme, hovercolor }) => hovercolor || theme.primary};
    path {
      fill: #fff !important;
    }
  }

  &.btn-solid.black-btn {
    background-image: -webkit-linear-gradient(30deg, #222 50%, transparent 0);
    background-image: -webkit-linear-gradient(60deg, #222 50%, transparent 0);
    background-image: linear-gradient(30deg, #222 50%, transparent 0);
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.primary};
      }
    }
  }
  &.btnSeeMore {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    span {
      flex: 1;
    }
    .svgIcon {
      path {
        fill: ${({ theme }) => theme.primary};
      }
    }
  }
`;
