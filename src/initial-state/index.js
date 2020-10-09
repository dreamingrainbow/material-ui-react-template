/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview initial-state/index.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
export const initialState = {
  appMenu: {
    isOpen: false,
  },
  sidebar: {
    isOpen: false,
  },
  user: {
    authenticated: false,
    role: "Guest",
  },
};
export { store } from "./store";
export { StateProvider } from "./store";
