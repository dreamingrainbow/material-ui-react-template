/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview /initial-state/store.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { createContext, useReducer } from "react";
import { initialState } from "./";
import { init } from "../bootstrap/init";
import { actions } from "../actions";
export const store = createContext({});
const { Provider } = store;
function StateProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (!action.type || !actions.hasOwnProperty(action.type))
        throw new Error("Error: Action Not Found!");
      return actions[action.type](state, action);
    },
    initialState,
    init
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { StateProvider };
