import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LogoImage({ isHighlight }) {
  return (
    <Link href="/">
      <img
        style={{ height: 40 }}
        src={
          isHighlight
            ? '/static/assets/icon/logoHighlight.png'
            : '/static/assets/icon/logo.png'
        }
        alt=""
        className="logo"
      />
    </Link>
  );
}

LogoImage.propTypes = {
  isHighlight: PropTypes.bool,
};

export default LogoImage;
