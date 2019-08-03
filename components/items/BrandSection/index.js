import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Carousel } from 'antd';
import i18next from 'i18next';
import { BrandSectionWrapper } from './styles';
import BrandItem from '../BrandItem';
import CouponItem from '../CouponItem';

const SETTING = {
  dots: false,
  infinite: false,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 3,
  variableWidth: true,
};

const BrandSection = ({ item, isShowArrow,data }) => (
  <BrandSectionWrapper>
  <Carousel {...SETTING}>
    <BrandItem item={item} suffix={i18next.t('refunds.refunded')} />
    {data.map(e => <CouponItem item={item} />)}
    </Carousel>
  </BrandSectionWrapper>
);
BrandSection.propTypes = {
  item: PropTypes.object,
  isShowArrow: PropTypes.bool,
};

BrandSection.defaultProps = {
  isShowArrow: true,
};

export default BrandSection;
