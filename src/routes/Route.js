import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '../template/default';
import AuthLayout from '../template/auth';

import { store } from '../store';

const RouteWrapper = ({ component: Component, isPrivate = false, ...rest }) => {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/entrar" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = ({ children }) => {
    if (isPrivate) {
      return <DefaultLayout {...rest}>{children}</DefaultLayout>;
    }
    return <AuthLayout>{children}</AuthLayout>;
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...rest}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
