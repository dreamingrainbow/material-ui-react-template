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
  ContactUs,
} from "./components/pages";
import { SecuredRoute } from "./SecuredRoute";
import { Blog } from "./components/common/sections";
export function App() {
  const appState = useContext(store);
  const { state } = appState;
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
            return state.user.authenticated === true ? (
              <Redirect to="/Dashboard" />
            ) : (
              <Login {...props} />
            );
          }}
        />
        <Route path="/password/reset/:token" component={PasswordReset} />
        <Route path="/password/forgot" component={PasswordForgot} exact />
        <Route path="/contact-us" component={ContactUs} exact />
        <Route path="/blog/:username/postId/:postId" component={Blog} exact />
        <Route path="/blog/:username/posts/:postName" component={Blog} exact />

        <RouteWithLayout
          path="/investor-information"
          exact
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
        >
          <DefaultPage />
        </RouteWithLayout>

        <RouteWithLayout
          path="/policies"
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
          exact
        >
          <DefaultPage />
        </RouteWithLayout>

        <RouteWithLayout
          path="/highlights"
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
          exact
        >
          <DefaultPage />
        </RouteWithLayout>

        <RouteWithLayout
          path="/newsletter"
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
          exact
        >
          <DefaultPage />
        </RouteWithLayout>

        <RouteWithLayout
          path="/faq"
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
          exact
        >
          <DefaultPage />
        </RouteWithLayout>

        <RouteWithLayout
          path="/search"
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
          exact
        >
          <DefaultPage />
        </RouteWithLayout>

        <RouteWithLayout
          path="/highlights"
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
          exact
        >
          <DefaultPage />
        </RouteWithLayout>

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

        <SecuredRoute
          path="/my-account"
          exact
          layout={
            state.user.authenticated
              ? state.user.role === "Admin"
                ? AdminLayout
                : UserLayout
              : MainLayout
          }
        >
          <UserPage />
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
