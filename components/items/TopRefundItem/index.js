import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { TopRefundItemWrapper } from './styles';
import { formatMoney, formatNumber } from '../../../utils/text';

const TopRefundItem = ({ item }) => (
  <TopRefundItemWrapper>
    <div className="txtTitle bold">{item.name}</div>
    <div className="vContent">
      <div className="txtValue bold">
        {formatMoney(item?.statistic?.cashbackTotal)} VND
      </div>
      <div className="txtProductCount headline">{`${formatNumber(
        item?.statistic?.transactionTotal
      )} ${i18next.t('unit.order')}`}</div>
    </div>
  </TopRefundItemWrapper>
);
TopRefundItem.propTypes = {
  item: PropTypes.object,
};

TopRefundItem.defaultProps = {};

export default TopRefundItem;
