import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { ThemeProvider } from 'styled-components';
import AuthActions from '../redux/Auth/actions';

import configureStore from '../redux/store';
import { isAuthenticated } from '../utils/cookies';
import theme from '../config/theme';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    // TODO: Sharing isAuthenticated state all of application
    const isAuth = isAuthenticated(ctx);
    ctx.store.dispatch(AuthActions.setAuth(isAuth));

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
