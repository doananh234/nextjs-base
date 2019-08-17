import React from 'react';
// import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import UnSignIn from '../../../containers/User/UnSignIn';
import { showLoginModal } from '../../../redux/app/actions';
import { SignInModalWrapper } from './styles';

const SignInModal = () => {
  const isShowModal = useSelector(state => state.app.isShowLoginModal);
  const dispatch = useDispatch();

  return (
    <SignInModalWrapper
      width={335}
      onCancel={() => dispatch(showLoginModal(false))}
      footer={null}
      title={i18next.t('user.createAccount')}
      visible={isShowModal}
    >
      <UnSignIn />
    </SignInModalWrapper>
  );
};
SignInModal.propTypes = {};

export default SignInModal;
