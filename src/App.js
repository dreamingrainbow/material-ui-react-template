/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview /App.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { store } from "./initial-state";
import { MainLayout, AdminLayout, UserLayout } from "./layouts";
import { RouteWithLayout } from "./RouteWithLayout";
import {
  DefaultPage,
  AdminPage,
  UserPage,
  Register,
  Login,
  PasswordReset,
  PasswordForgot,
  DashboardPage,
  Profile,
  NotFound,
} from "./components/pages";
export function App() {
  const appState = useContext(store);
  const { state } = appState;
  const SecuredRoute = (props) => {
    const { children, ...rest } = props;
    return state.user.authenticated === true ? (
      <RouteWithLayout {...rest}> {children} </RouteWithLayout>
    ) : (
      <Redirect to="/login" {...props} />
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout
          path="/"
          exact
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
        >
          {" "}
          {state.user.authenticated ? (
            state.user.role === "Admin" ? (
              <AdminPage />
            ) : (
              <UserPage />
            )
          ) : (
            <DefaultPage />
          )}
        </RouteWithLayout>
        <Route path="/register" component={Register} />

        <Route
          path="/login/:notify?"
          render={(props) => {
            console.log(state.user.authenticated);
            return state.user.authenticated === true ? (
              <Redirect to="/Dashboard" />
            ) : (
              <Login {...props} />
            );
          }}
        />
        <Route path="/password/reset/:token" component={PasswordReset} />
        <Route path="/password/forgot" component={PasswordForgot} />

        <SecuredRoute
          path="/dashboard"
          exact
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
        >
          <DashboardPage />
        </SecuredRoute>
        <SecuredRoute
          path="/profile"
          exact
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
        >
          <Profile />
        </SecuredRoute>
        <RouteWithLayout
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
        >
          <NotFound />
        </RouteWithLayout>
      </Switch>
    </BrowserRouter>
  );
}
