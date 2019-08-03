import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Button } from 'antd';
import { FooterSubscribeWrapper } from './styles';

const FOOTER_INFO = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  copyright: ' 2018-19 themeforest powered by pixelstrap',
  subcribeDescription:
    'Never Miss Anything From Multikart By Signing Up To Our Newsletter. ',
  subcribeTitle: 'KNOW IT ALL FIRST!',
};

const FooterSubscribe = props => (
  <FooterSubscribeWrapper>
    <Row gutter={16}>
      <Col sm={12} xs={24}>
        <div className="subscribe">
          <div>
            <h4>{FOOTER_INFO.subcribeTitle}</h4>
            <p>{FOOTER_INFO.subcribeDescription}</p>
          </div>
        </div>
      </Col>
      <Col className="formInput" sm={12} xs={24}>
        <Input id="#" placeholder="Enter your email" />
        <span className="space" />
        <Button className="btnSubscribe" type="primary">
          subscribe
        </Button>
      </Col>
    </Row>
  </FooterSubscribeWrapper>
);
FooterSubscribe.propTypes = {};

export default FooterSubscribe;
