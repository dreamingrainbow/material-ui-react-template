/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview /components/pages/DashboardPage.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";
import { Grid, Box } from "@material-ui/core";
import { QuickAccessLinks } from "../../common/sections";
import { Dashboard } from "./dashboard";
function DashboardPage(props) {
  return (
    <Grid container justify="center" alignContent="center">
      <Box marginY={3} width="100%">
        <Dashboard />
      </Box>
      <QuickAccessLinks />
    </Grid>
  );
}

export { DashboardPage };
