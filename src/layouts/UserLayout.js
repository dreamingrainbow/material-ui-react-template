import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import { useStyles } from "../components/common/use-styles";

const UserLayout = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Grid container justify="center" alignContent="center" spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={2}>
          Sidebar
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node,
};

export { UserLayout };
