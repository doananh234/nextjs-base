import React from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import { Card, Row, Col, Carousel } from 'antd';
import CategoryItem from '../../../components/items/CategoryItem';
import { CategoriesWrapper } from './styles';

const CATEGORIES = [
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
  {
    key: 'a',
    title: 'Chợ điện tử',
    icon: 'skin',
  },
];

const Categories = props => {
  const settings = {
    swipeToSlide: true,
    infinite: false,
    // centerMode: true,
    draggable: true,
    // centerPadding: '60px',
    responsive: [
      {
        breakpoint: 577,
        settings: {
          centerMode: true,
          dots: false,
          centerPadding: '20px',
        },
      },
    ],
  };
  return (
    <CategoriesWrapper>
      <Carousel {...settings}>
        {chunk(CATEGORIES, 9).map((group, index) => (
          <div className="categoryGroup">
            <Card bordered={false} key={String(`group${index}`)}>
              <Row>
                {group.map((e, index2) => (
                  <Col key={String(`category${index2}`)} span={8}>
                    <CategoryItem item={e} />
                  </Col>
                ))}
              </Row>
            </Card>
          </div>
        ))}
      </Carousel>
    </CategoriesWrapper>
  );
};

Categories.propTypes = {};

export default Categories;
