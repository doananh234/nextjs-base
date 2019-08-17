import React from 'react';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { Card, Row, Col } from 'antd';
import CustomButton from '../../../components/CustomButton';
import CategoryItem from '../../../components/items/CategoryItem';
import { CategoriesWrapper } from './styles';

const Categories = props => {
  const categories = useSelector(state => state.home.categories);
  return (
    <CategoriesWrapper {...props}>
      <Card
        extra={
          <CustomButton type="link" className="seeMore">
            {i18next.t('buttons.seeMore')}
          </CustomButton>
        }
        title={i18next.t('home.category')}
        bordered={false}
      >
        <Row type="flex">
          {categories &&
            [...categories].splice(0, 6).map((e, index) => (
              <Col key={String(`category${index}`)} span={8}>
                <CategoryItem item={e} />
              </Col>
            ))}
        </Row>
      </Card>
    </CategoriesWrapper>
  );
};

Categories.propTypes = {};

export default Categories;
