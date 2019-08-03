import React from 'react';
import PropTypes from 'prop-types';
import { Card, List } from 'antd';
import i18next from 'i18next';
import { RankingWrapper } from './styles';


const Ranking = props => {
  return (
    <RankingWrapper>
      <Card bordered={false}>
        <div className='txtTitle'>{i18next.t('home.appStore.title')}</div>
        <div className='txtDescription'>{i18next.t('home.appStore.description')}<br/>{i18next.t('home.appStore.tryItNow')}</div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTzxXrgp5pzy-IrVz8MCHGs0CWdWmK4TquvzSajKxUI8ED6XJ' alt='' />
      </Card>
    </RankingWrapper>
  );
};

Ranking.propTypes = {};

export default Ranking;
