/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview /App.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./initial-state";
import { MainLayout, AdminLayout, UserLayout } from "./layouts";
import { RouteWithLayout } from "./RouteWithLayout";
import { DefaultPage } from "./components/pages";
export function App() {
  const appState = useContext(store);
  const { state } = appState;
  return (
    <BrowserRouter>
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
        {state.user.authenticated
            ? state.user.role === "Admin"
              ? <DefaultPage />
              : <DefaultPage />
            : <DefaultPage />}
      </RouteWithLayout>
    </BrowserRouter>
  );
}

