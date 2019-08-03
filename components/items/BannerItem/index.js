import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import { BannerItemWrapper } from './styles';

const BannerItem = ({ item }) => (
  <BannerItemWrapper>
    <div
      className="bannerContainer"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <Row>
        <Col lg={18} md={24}>
          <div className="content">
            <Title>Connect the physical and the digital world</Title>
            <p>{item.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  </BannerItemWrapper>
);
BannerItem.propTypes = {
  item: PropTypes.object,
};

export default BannerItem;
