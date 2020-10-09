import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { store } from "../../../initial-state";
import { Grid, List, ListItem, makeStyles, Link } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  listItemTitle: {
    fontSize: "larger",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
  listItem: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: `${theme.spacing(4)}px`,
    },
  },
}));
export function QuickAccessLinks() {
  const appState = React.useContext(store);
  const { state } = appState;
  const classes = useStyles();
  return (
    <Grid container padding={2} className={classes.container}>
      <Grid item xs={12} md={3}>
        <List>
          <ListItem className={classes.listItemTitle}>
            <b>Quick Access</b>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              style={{ marginTop: "10px" }}
              to="/"
            >
              Home
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>Search</ListItem>
          <ListItem className={classes.listItem}>
            {state.user.authenticated ? (
              <Link
                component={RouterLink}
                size="small"
                color="inherit"
                style={{ marginTop: "10px" }}
                to="/dashboard"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                component={RouterLink}
                size="small"
                color="inherit"
                style={{ marginTop: "10px" }}
                to="/login"
              >
                Login
              </Link>
            )}
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={3}>
        <List>
          <ListItem className={classes.listItemTitle}>
            <b>Extra</b>
          </ListItem>
          <ListItem className={classes.listItem}>Post</ListItem>
          <ListItem className={classes.listItem}>
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              style={{ marginTop: "10px" }}
              to="/investor-information"
            >
              Investor Information
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              style={{ marginTop: "10px" }}
              to="/policies"
            >
              Policies
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={3}>
        <List>
          <ListItem className={classes.listItemTitle}>
            <b>News</b>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              style={{ marginTop: "10px" }}
              to="/highlights"
            >
              Highlights
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              style={{ marginTop: "10px" }}
              to="/newsletter"
            >
              Newsletter
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              style={{ marginTop: "10px" }}
              to="/faq"
            >
              FAQ
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={3}>
        <List>
          <ListItem className={classes.listItemTitle}>
            <b>Connecting</b>
          </ListItem>
          {state.user.authenticated && (
            <ListItem className={classes.listItem}>
              <Link
                component={RouterLink}
                size="small"
                color="inherit"
                style={{ marginTop: "10px" }}
                to="/profile"
              >
                Profile
              </Link>
            </ListItem>
          )}{state.user.authenticated && (
            <ListItem className={classes.listItem}>
              <Link
                component={RouterLink}
                size="small"
                color="inherit"
                style={{ marginTop: "10px" }}
                to="/my-account"
              >
                My Account
              </Link>
            </ListItem>
          )}
          {!state.user.authenticated && (
            <ListItem className={classes.listItem}>
              <Link
                component={RouterLink}
                size="small"
                color="inherit"
                style={{ marginTop: "10px" }}
                to="/register"
              >
                Register
              </Link>
            </ListItem>
          )}
          {!state.user.authenticated && (
            <ListItem className={classes.listItem}>
              <Link
                component={RouterLink}
                size="small"
                color="inherit"
                style={{ marginTop: "10px" }}
                to="/forgot-password"
              >
                Forgot Password
              </Link>
            </ListItem>
          )}
          <ListItem className={classes.listItem}>
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              style={{ marginTop: "10px" }}
              to="/contact-us"
            >
              Contact Us
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
