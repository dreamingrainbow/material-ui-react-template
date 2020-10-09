/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview /components/pages/UserPage.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { useContext } from "react";
import { store } from "../../../../initial-state";
import { Button, Paper, Grid, Box } from "@material-ui/core";
import { useStyles } from "../../../common/use-styles";
import { QuickAccessLinks } from "../../../common/sections/QuickAccessLinks";

function UserPage(props) {
  const appState = useContext(store);
  const { state, dispatch } = appState;
  const classes = useStyles(state.activeTheme);
  return (
    <Grid container justify="center" alignContent="center">
      <Box marginY={3} width="100%">
        <Paper className={classes.paper} elevation={0}>
          User Page
          <Button
            color="default"
            variant="outlined"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch({ type: "toggleSwitch", payload: !state.toggle });
              dispatch({
                type: "authenticated",
                payload: !state.user.authenticated,
              });
            }}
          >
            {state.toggle ? "On" : "Off"}
          </Button>
        </Paper>
      </Box>
      <QuickAccessLinks />
    </Grid>
  );
}

export { UserPage };
