/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview /index.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import { ThemeLoader } from "./components/common/theme-loader";
import { StateProvider } from "./initial-state";
function Bootstrap() {
  return (
    <StateProvider>
      <ThemeLoader>
        <App />
      </ThemeLoader>
    </StateProvider>
  );
}

ReactDOM.render(<Bootstrap />, document.getElementById("root"));
