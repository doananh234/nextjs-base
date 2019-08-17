import styled from 'styled-components';

export const SVGIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    height: ${({ size }) => size}px;
    width: auto;
  }
`;
