import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import CustomButton from '../../../components/CustomButton';
import CouponItem from '../../../components/items/CouponItem';
import { CouponsWrapper } from './styles';
import { brandPromotionsSelectors } from '../../../redux/brandPromotions/selectors';
import {
  getDataForWeb,
  getDataForApp,
} from '../../../redux/brandCashbacks/selectors';
import { redirectToPromotions } from '../../../redux/promotions/actions';
import { brandsSelectors } from '../../../redux/brands/selectors';

const Coupons = () => {
  const brand = useSelector(brandsSelectors.getCurrentData);
  const promotions = useSelector(brandPromotionsSelectors.getDataArr);
  const cashbackForApp = useSelector(getDataForApp);
  const cashbackForWeb = useSelector(getDataForWeb);
  const dispatch = useDispatch();

  const onPressBuyNow = item => {
    if (!item.buyURL) {
      dispatch(redirectToPromotions(brand));
    } else {
      dispatch(redirectToPromotions(item));
    }
  };
  return (
    <CouponsWrapper>
      <Card
        title={i18next.t('brandDetail.coupons')}
        bordered={false}
        className="noPadding"
      >
        {promotions.map(e => (
          <CouponItem onPressBuyNow={onPressBuyNow} item={e} />
        ))}
        <CustomButton type="link" className="btnSeeMore btn-solid">
          {i18next.t('buttons.seeMore')}
        </CustomButton>
      </Card>
      <Card
        title={i18next.t('refunds.title')}
        bordered={false}
        className="noPadding"
      >
        <Tabs>
          <Tabs.TabPane tab={i18next.t('brandDetail.cashbagWeb')} key="1">
            {cashbackForWeb.map(e => (
              <CouponItem onPressBuyNow={onPressBuyNow} item={e} isRefundRate />
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane tab={i18next.t('brandDetail.cashbagApp')} key="2">
            {cashbackForApp.map(e => (
              <CouponItem onPressBuyNow={onPressBuyNow} item={e} isRefundRate />
            ))}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </CouponsWrapper>
  );
};

Coupons.propTypes = {};

Coupons.defaultProps = {};

export default Coupons;
