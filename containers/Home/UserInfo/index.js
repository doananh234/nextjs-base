import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Card,Button } from 'antd';
import { UserInfoWrapper } from './styles';
import Container from '../../../components/layout/Container';
import InfoItem from '../../../components/items/InfoItem';

const UserInfo = props => (
  <Container>
    <UserInfoWrapper {...props}>
      <Card bordered={false} className='noPadding'>
        <InfoItem
          item={{ title: 'Anh Doan', value: '10,000', icon: 'aliwangwang' }}
        />
        <InfoItem
          isShowArrow={false}
          item={{
            title: i18next.t('user.waitingConfirmMoney'),
            value: '500,000',
            icon: 'dollar',
          }}
        />
      </Card>
      <h1 className="sectionTitle">{i18next.t('home.account')}</h1>
      <Card bordered={false} className='noPadding settings'>
        <InfoItem
          item={{ title: i18next.t('settings.notification'), value: '3', icon: 'bell' }}
        />
        <InfoItem
          item={{
            title: i18next.t('settings.history'),
            value: '4',
            icon: 'history',
          }}
        />
        <InfoItem
          item={{ title: i18next.t('settings.support'), icon: 'customer-service' }}
        />
        <InfoItem
          item={{ title: i18next.t('settings.ratting'), icon: 'star' }}
        />
        </Card>
        <div className='btnLogout'>
          <Button icon='logout'>{i18next.t('settings.logout')}</Button>
        </div>
    </UserInfoWrapper>
  </Container>
);
UserInfo.propTypes = {};

export default UserInfo;
