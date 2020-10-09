/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview /components/pages/common/NotFound.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { useContext } from "react";
import { store } from "../../../initial-state";
import { Paper, Grid, Box } from "@material-ui/core";
import { useStyles } from "../../common/use-styles";
import { QuickAccessLinks } from "../../common/sections/QuickAccessLinks";

function NotFound(props) {
  const appState = useContext(store);
  const { state } = appState;
  const classes = useStyles(state.activeTheme);
  return (
    <Grid container justify="center" alignContent="center">
      <Box marginY={3} width="100%">
        <Paper className={classes.paper} elevation={0}>
          Resource Not Found!
        </Paper>
      </Box>
      <QuickAccessLinks />
    </Grid>
  );
}

export { NotFound };
