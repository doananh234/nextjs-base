import React from 'react';
// import PropTypes from 'prop-types';
import i18next from 'i18next';
import { RightHeaderWrapper } from './styles';
import SVGIcon from '../../SVGIcon';
import { Button } from '../../CustomButton';
import themeConfig from '../../../config/theme';

const RightHeader = () => (
  <RightHeaderWrapper>
    <Button
      width={300}
      size="large"
      background={themeConfig.primary}
      hovercolor="#fff"
      className="btnDownload btn-solid"
    >
      <SVGIcon size={24} name="download" />
      <span className="txtButton">{i18next.t('buttons.downloadApp')}</span>
    </Button>
  </RightHeaderWrapper>
);
RightHeader.propTypes = {};

export default RightHeader;
