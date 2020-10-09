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
  Dashboard,
  Profile,
  NotFound
} from "./components/pages";
export function App() {
  const appState = useContext(store);
  const { state } = appState;
  const SecuredRoute = ({ component: Component, ...rest }) => (
    <RouteWithLayout
      {...rest}
      render={(props) =>
        state.user.authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
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
            console.log(state.user.authenticated)
            return state.user.authenticated === true ? (
              <Redirect to="/" />
            ) : (
              <Login {...props} />
            );
          }}
        />
        <Route path="/password/reset/:token" component={PasswordReset} />
        <Route path="/password/forgot" component={PasswordForgot} />

        <SecuredRoute path="/dashboard" component={Dashboard} />
        <SecuredRoute path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
