import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { LeftHeaderWrapper } from './styles';
import LogoImage from '../../LogoImage';
import SVGIcon from '../../SVGIcon';

const LeftHeader = ({ title, isDetailPage }) => (
  <LeftHeaderWrapper>
    {isDetailPage ? (
      <Link href="/" as="/">
        <SVGIcon size={30} name="back" />
      </Link>
    ) : (
      <LogoImage />
    )}
    <span className="title">{title || i18next.t('appInfo.name')}</span>
  </LeftHeaderWrapper>
);

LeftHeader.propTypes = {
  title: PropTypes.string,
  isDetailPage: PropTypes.bool,
};

export default LeftHeader;
