/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview Login.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { store } from "../../../initial-state";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Copyright, SideView } from "../../common/sections";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function PasswordForgot(props) {
  const appState = useContext(store);
  const { state, dispatch } = appState;
  const classes = useStyles(state.activeTheme);
  return (
    <SideView image="url(https://placehold.it/600x800)">
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Forgot Password
      </Typography>
      <form className={classes.form} noValidate align="left">
        <Grid container align="left">
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={async (e) => {
                e.preventDefault();
                async function authorize(dispatch) {
                  dispatch({
                    type: "authenticated",
                    payload: !state.user.authenticated,
                  });
                }
                await authorize(dispatch);
              }}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs>
            <Link to="/login" variant="body2" component={RouterLink}>
              Log In
            </Link>
          </Grid>
          <Grid item>
            <Link to="/register" variant="body2" component={RouterLink}>
              {"Don't have an account? Register"}
            </Link>
          </Grid>
        </Grid>
      </form>
      <Box mt={1}>
        <Copyright />
        <RouterLink to="/">Home</RouterLink>
      </Box>
    </SideView>
  );
}

export { PasswordForgot };
