import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, fallback, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated
        ? (
          <Component {...props} />
        )
        : (<Redirect to={{ pathname: fallback, state: { from: props.location } }} />)
    )}
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  fallback: PropTypes.string,
  location: PropTypes.any,
};
export default PrivateRoute;
