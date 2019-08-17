import React from 'react';
// import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'antd';
import { UserInfoWrapper } from './styles';
import InfoItem from '../../components/items/InfoItem';
import UnSignIn from './UnSignIn';
import AuthActions from '../../redux/auth/actions';

const UserInfo = props => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const user = useSelector(state => state.home.user);
  const dispatch = useDispatch();

  const USER_DATA = [
    {
      title: i18next.t('user.username'),
      value: user && user.name,
      avatar: user && user.avatar,
    },
    {
      title: i18next.t('user.overbalance'),
      value: user && `${user.statistic.eventRewardsSuccessCash}đ`,
      icon: 'wallet',
    },
    {
      title: i18next.t('user.waitingConfirmMoney'),
      value: user && `${user.statistic.eventRewardsPendingCash}đ`,
      icon: 'refund',
    },
  ];

  // const SETTINGS = [
  //   {
  //     title: i18next.t('settings.notification'),
  //     value: '3',
  //     icon: 'bell',
  //   },
  //   {
  //     title: i18next.t('settings.history'),
  //     value: '4',
  //     icon: 'history',
  //   },
  //   {
  //     title: i18next.t('settings.support'),
  //     icon: 'customer-service',
  //   },
  //   { title: i18next.t('settings.ratting'), icon: 'star' },
  // ];

  const logout = () => {
    dispatch(AuthActions.signOut());
  };

  return (
    <UserInfoWrapper {...props}>
      <div className="content">
        <Card
          title={i18next.t(isAuth ? 'user.yourBag' : 'user.createAccount')}
          bordered={false}
          className="noPadding"
        >
          {isAuth && USER_DATA.map(e => <InfoItem item={e} key={e.title} />)}
          {!isAuth && <UnSignIn />}
        </Card>
        {isAuth && (
          <div className="btnLogout">
            <Button onClick={logout} icon="logout">
              {i18next.t('settings.logout')}
            </Button>
          </div>
        )}
      </div>
    </UserInfoWrapper>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
