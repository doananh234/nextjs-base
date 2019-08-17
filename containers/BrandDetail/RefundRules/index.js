import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import InfoItem from '../../../components/items/InfoItem/index';
import { RefundRulesWrapper } from './styles';
import { brandsSelectors } from '../../../redux/brands/selectors';
import { getImageUrl } from '../../../utils/data';

const RefundRules = () => {
  const brand = useSelector(brandsSelectors.getCurrentData);
  return (
    <div>
      {brand?.guides?.map(item => (
        <RefundRulesWrapper>
          <div className="headline">{i18next.t(item.desc)}</div>
          <Card bordered={false} className="noPadding">
            {item.items.map(e => (
              <InfoItem
                item={{
                  ...e,
                  image: getImageUrl(e, 'icon'),
                  description: e.desc,
                }}
              />
            ))}
          </Card>
        </RefundRulesWrapper>
      ))}
    </div>
  );
};

RefundRules.propTypes = {};

export default RefundRules;
