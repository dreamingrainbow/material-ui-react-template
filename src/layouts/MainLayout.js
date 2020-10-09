import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import { store } from "../initial-state";
import { useStyles } from "../components/common/use-styles";
import { Header, Footer } from "../components/common";
const MainLayout = (props) => {
  const { children } = props;
  const appState = React.useContext(store);
  const { state } = appState;
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Grid container justify="center" alignContent="center">
        {state.user.authenticated ? (
          state.user.role === "Admin" ? (
            <Header />
          ) : (
            <Header />
          )
        ) : (
          <Header />
        )}
        <Grid item xs={12}>
          {children}
        </Grid>
        {state.user.authenticated ? (
          state.user.role === "Admin" ? (
            <Footer />
          ) : (
            <Footer />
          )
        ) : (
          <Footer />
        )}
      </Grid>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export { MainLayout };
