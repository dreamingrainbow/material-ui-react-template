/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview /components/pages/common/Register.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { store } from "../../../initial-state";
import { Button, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Copyright, SideView} from "../../common/sections";

export const useStyles = makeStyles((theme) => ({
  paper: {
    //margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

function Register(props) {
  return (
    <SideView image="url(https://placehold.it/600x800)">
      <SignUp />
    </SideView>
  );
}

export { Register };

export default function SignUp(props) {
  const appState = useContext(store);
  const { state } = appState;
  const classes = useStyles(state.activeTheme);

  return (
    <React.Fragment>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h6">
        Register
      </Typography>
      <form className={classes.form} noValidate align="left">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
            size="small"
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              size="small"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              size="small"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" size="small" />}
              label="I want to receive promotions and updates."
            />
          </Grid>
        </Grid>
        <Button
            size="small"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Register
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/login" variant="body2" component={RouterLink}>
              Already have an account? Log in
            </Link>
          </Grid>
        </Grid>
      </form>
      <Box mt={1}>
        <Copyright />
        <RouterLink to="/">Home</RouterLink>
      </Box>
    </React.Fragment>
  );
}
