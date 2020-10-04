import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import { useStyles } from "../components/common/use-styles";

const MainLayout = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Grid container justify="center" alignContent="center">
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export { MainLayout };
