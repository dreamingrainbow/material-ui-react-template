import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { store } from "./initial-state";
import { RouteWithLayout } from "./RouteWithLayout";

export function SecuredRoute(props) {
  const appState = useContext(store);
  const { state } = appState;
  const { children, ...rest } = props;
  return state.user.authenticated === true ? (
    <RouteWithLayout {...rest}> {children} </RouteWithLayout>
  ) : (
    <Redirect to="/login" {...props} />
  );
}
