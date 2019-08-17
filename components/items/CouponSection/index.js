import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import i18next from 'i18next';
import { CouponSectionWrapper } from './styles';
import CustomButton from '../../CustomButton';
import CouponItem from '../CouponItem/index';
import { getImageUrl } from '../../../utils/data';

const CouponSection = ({ item, onPressBuyNow }) => (
  <CouponSectionWrapper>
    <Card
      title={<img alt="" src={getImageUrl(item)} className="logoTitle" />}
      extra={
        <CustomButton onClick={() => onPressBuyNow(item)} className="seeMore">
          {i18next.t('buttons.buyNow')}
        </CustomButton>
      }
      bordered={false}
    >
      {item?.categories?.items?.map(e => <CouponItem item={e} />)}
      <CustomButton type="link" className="btnSeeMore btn-solid">
        {i18next.t('buttons.seeMore')}
      </CustomButton>
    </Card>
  </CouponSectionWrapper>
);
CouponSection.propTypes = {
  item: PropTypes.object,
  onPressBuyNow: PropTypes.func,
};

CouponSection.defaultProps = {};

export default CouponSection;
