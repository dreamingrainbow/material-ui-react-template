/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview RouteWithLayout.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
function RouteWithLayout(props) {
  const { layout: Layout, children, ...rest } = props;
  return (
    <Route {...rest}>
      <Layout>{children}</Layout>
    </Route>
  );
};

RouteWithLayout.propTypes = {
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export { RouteWithLayout };
