import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Drawer, Grid } from "@material-ui/core";
import { store } from "../initial-state";
import { useStyles } from "../components/common/use-styles";
import { Header, Footer, Sidebar } from "../components/common";
const UserLayout = (props) => {
  const { children } = props;
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
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
        
        <Drawer anchor="left" open={state.sidebar.isOpen} onClose={(evt) => {
          evt.preventDefault();
          dispatch({
            type:"toggleSidebar",
            payload: !state.sidebar.isOpen
          });
        }}>
          {state.user.authenticated
          ? state.user.role === "Admin"
            ? state.sidebar.isOpen && (
                
                  <Sidebar />
                
              )
            : state.sidebar.isOpen && (
                
                  <Sidebar />
                
              )
          : null}
        </Drawer>
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

UserLayout.propTypes = {
  children: PropTypes.node,
};

export { UserLayout };
