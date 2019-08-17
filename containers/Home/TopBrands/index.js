import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card, List } from 'antd';
import i18next from 'i18next';
import TopRefundItem from '../../../components/items/TopRefundItem';
import { TopActivityWrapper } from './styles';

const TopActivity = props => {
  const topCashbackBrands = useSelector(state => state.home.topCashbackBrands);
  return (
    <TopActivityWrapper {...props}>
      <Card
        title={i18next.t('home.topRefund')}
        bordered={false}
        className="noPadding"
      >
        <List
          bordered={false}
          size="small"
          dataSource={topCashbackBrands}
          renderItem={(item, index) => (
            <List.Item key={item.id}>
              <TopRefundItem item={item} index={index} />
            </List.Item>
          )}
        />
      </Card>
    </TopActivityWrapper>
  );
};

TopActivity.propTypes = {};

export default TopActivity;
