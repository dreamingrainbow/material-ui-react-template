/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview /components/common/sections/Footer.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    bottom: "0px",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    width: "100%",
  },
}));
export function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h6" align="center">
        {process.env.REACT_APP_COPYRIGHT} {process.env.REACT_APP_COMPANY} 
      </Typography>
    </div>
  );
}
