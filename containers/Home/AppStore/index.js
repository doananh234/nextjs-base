import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Row, Col } from 'antd';
import i18next from 'i18next';
import { RankingWrapper } from './styles';

const Ranking = () => (
  <RankingWrapper>
    <Card title={i18next.t('buttons.downloadAppCashbag')} bordered={false}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTzxXrgp5pzy-IrVz8MCHGs0CWdWmK4TquvzSajKxUI8ED6XJ"
        alt=""
      />
      <Row>
        <Col span={12}>
          <img
            className="imgStore"
            src="/static/assets/images/appleStore.png"
            alt=""
          />
        </Col>
        <Col span={12}>
          <img
            className="imgStore"
            src="/static/assets/images/googlePlay.png"
            alt=""
          />
        </Col>
      </Row>
    </Card>
  </RankingWrapper>
);

Ranking.propTypes = {};

export default Ranking;
