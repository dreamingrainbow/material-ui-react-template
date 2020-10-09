/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview Dashboard.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { useContext } from "react";
import { store } from "../../../initial-state";
import { Button, Paper } from "@material-ui/core";
import { useStyles } from "../../common/use-styles";

function Dashboard(props) {
  const appState = useContext(store);
  const { state, dispatch } = appState;
  const classes = useStyles(state.activeTheme);
  return (
    <Paper
      className={classes.paper}
      onClick={(event) => {
        dispatch({ type: "toggleSwitch", payload: !state.toggle });
      }}
    >
      <Button color="default" variant="outlined">
        {state.toggle ? "On" : "Off"}
      </Button>
    </Paper>
  );
}

export { Dashboard };
