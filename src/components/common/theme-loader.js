/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview theme-loader.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";

import { store } from "../../initial-state";

/**
 * ThemeLoader function loads the MUI Theme from state.
 * @function ThemeLoader Load the Material UI Theme
 * @param {} props 
 */
export function ThemeLoader(props) {
  const { children } = props;
  const globalState = React.useContext(store);
  const { state } = globalState;
  return (
    <ThemeProvider theme={createMuiTheme(state.activeTheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
