import React from 'react';
// import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { Icon } from 'antd';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { UnSignInWrapper } from './styles';
import AuthAction from '../../redux/auth/actions';
import SVGIcon from '../../components/SVGIcon';

const UnSignIn = () => {
  const dispatch = useDispatch();

  const responseFacebook = response => {
    const { accessToken } = response;
    dispatch(AuthAction.fbSignIn(accessToken));
  };

  const responseGoogle = response => {
    const { tokenId, error } = response;
    if (!error) {
      dispatch(AuthAction.googleSignIn(tokenId));
    }
  };

  return (
    <UnSignInWrapper className="socialLogin">
      <SVGIcon size={60} className="defaultUser" name="defaultUser" />
      <FacebookLogin
        appId={process.env.FB_APP_ID}
        fields="id,first_name,last_name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <div
            role="presentation"
            className="socialBtn btnFB"
            onClick={renderProps.onClick}
          >
            <div className="icWrapper">
              <Icon type="facebook" theme="filled" />
            </div>
            {i18next.t('buttons.loginFB')}
          </div>
        )}
      />
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        render={renderProps => (
          <div
            role="presentation"
            className="socialBtn btnGoogle"
            onClick={renderProps.onClick}
          >
            <div className="icWrapper">
              <SVGIcon name="google" />
            </div>
            {i18next.t('buttons.loginGoogle')}
          </div>
        )}
        buttonText="Login"
        onFailure={responseGoogle}
        onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </UnSignInWrapper>
  );
};

UnSignIn.propTypes = {};

export default UnSignIn;
