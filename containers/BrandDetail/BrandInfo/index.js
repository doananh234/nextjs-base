import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { BrandInfoWrapper } from './styles';
import themeConfig from '../../../config/theme';
import CustomButton from '../../../components/CustomButton';
import { brandsSelectors } from '../../../redux/brands/selectors';
import { getCover, getImageUrl } from '../../../utils/data';
import { formatNumber, formatMoney } from '../../../utils/text';
import { redirectToPromotions } from '../../../redux/promotions/actions';
import { getBrandsById } from '../../../redux/brands/actions';

const BrandInfo = props => {
  const brand = useSelector(brandsSelectors.getCurrentData);
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  const onPressBuyNow = () => {
    dispatch(redirectToPromotions(brand));
  };

  useEffect(() => {
    dispatch(getBrandsById(brand._id));
  }, [isAuth]);

  return (
    <BrandInfoWrapper {...props}>
      <Card className="noPadding" bordered={false}>
        <img alt="" src={getCover(brand)} className="banner" />

        <div>
          <div className="logo">
            <img alt="" src={getImageUrl(brand)} className="banner" />
          </div>
          <div className="brandContent">
            <div>
              <div className="txtValue txtBold">
                {formatNumber(brand?.statistic?.transactionTotal)}
              </div>
              <div className="txtUnit">{i18next.t('unit.order')}</div>
            </div>
            <div>
              <div className="txtValue txtBold">
                {formatMoney(brand?.statistic?.cashbackTotal)}
              </div>
              <div className="txtUnit">{i18next.t('unit.refundedMoney')}</div>
            </div>
          </div>
        </div>
        <CustomButton
          background={themeConfig.primary}
          hovercolor="white"
          onClick={onPressBuyNow}
          className="btnSeeMore btn-solid"
        >
          {i18next.t('buttons.buyNow')}
        </CustomButton>
      </Card>
    </BrandInfoWrapper>
  );
};
BrandInfo.propTypes = {};

export default BrandInfo;
