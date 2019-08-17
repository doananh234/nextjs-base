import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Link from 'next/link';
import i18next from 'i18next';
import { BrandSectionWrapper } from './styles';
import CustomButton from '../../CustomButton';
import { getCover, getImageUrl } from '../../../utils/data';

const BrandSection = ({ item, onPressBuyNow }) => (
  <BrandSectionWrapper>
    <Card
      title={<img alt="" src={getImageUrl(item)} className="logoTitle" />}
      extra={
        <CustomButton onClick={() => onPressBuyNow(item)} className="seeMore">
          {i18next.t('buttons.buyNow')}
        </CustomButton>
      }
      bordered={false}
    >
      <img alt="" src={getCover(item)} className="banner" />
      <Link as={`/brand/${item._id}`} href="/brand/[id]">
        <CustomButton type="link" className="btnSeeMore btn-solid">
          {i18next.t('buttons.seeMore')}
        </CustomButton>
      </Link>
    </Card>
  </BrandSectionWrapper>
);
BrandSection.propTypes = {
  item: PropTypes.object,
  onPressBuyNow: PropTypes.func,
};

BrandSection.defaultProps = {};

export default BrandSection;
