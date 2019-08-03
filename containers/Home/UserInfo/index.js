import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { UserInfoWrapper } from './styles';
import InfoItem from '../../../components/items/InfoItem/index';

const UserInfo = props => (
  <UserInfoWrapper {...props}>
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
  </UserInfoWrapper>
);
UserInfo.propTypes = {};

export default UserInfo;
