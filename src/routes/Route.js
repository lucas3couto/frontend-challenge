import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../template/default";
import AuthLayout from "../template/auth"
import Blank from "../template/blank"

import { store } from '../store'

const RouteWrapper = ({
  component: Component,
  isPrivate = false,
  layout,
  title,
  profile,
  ...rest
}) => {
  const { signed } = store.getState().auth

  if (!signed && isPrivate) {
    return <Redirect to="/entrar" />;
  }

  if (signed && !isPrivate && !profile) {
    return <Redirect to="/" />;
  }

  const Layout = ({ children, title }) => {
    if(isPrivate && !layout){
      return <DefaultLayout title={title} {...rest}>{children}</DefaultLayout>
    } else if(layout === "blank"){
    return <Blank>{children}</Blank>
    } else {
      return <AuthLayout>{children}</AuthLayout>
    }
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...rest} title={title}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default RouteWrapper