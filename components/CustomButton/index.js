import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styles';
import SVGIcon from '../SVGIcon';

function CustomButton({ children, ...props }) {
  return (
    <ButtonWrapper type="link" {...props}>
      {children}
      <SVGIcon name="arrow-right" />
    </ButtonWrapper>
  );
}

CustomButton.propTypes = {
  children: PropTypes.any,
};

export const Button = ButtonWrapper;

export default CustomButton;
