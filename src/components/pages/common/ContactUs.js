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
import { Button, IconButton, Collapse, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Copyright, SideView } from "../../common/sections";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";

export const useStyles = makeStyles((theme) => ({
  avatar: {
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

function ActionAlerts(props) {
  const appState = useContext(store);
  const { state } = appState;
  const classes = useStyles(state.activeTheme);
  const [open, toggleAlert] = React.useState(true);
  const { component, color } = props;
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity={color || "error"}
          action={
            <IconButton
              aria-label="close-lert"
              color="inherit"
              size="small"
              onClick={() => {
                toggleAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {component}
        </Alert>
      </Collapse>
    </div>
  );
}

function ContactUs(props) {
  const appState = useContext(store);
  const { state } = appState;
  const classes = useStyles(state.activeTheme);

  const [values, setValues] = React.useState({
    email: "",
    comments: "",
  });

  const [alerts, setAlerts] = React.useState([]);

  // eslint-disable-next-line 
  const clearAlerts = () => {
    setAlerts([]);
  };

  const handleChange = (event) => {
    const currentState = values;
    currentState[event.target.name] = event.target.value;
    setValues(currentState);
  };

  const emailValue = React.useRef(null);
  const commentsValue = React.useRef(null);

  const handleContact = (event) => {
    event.preventDefault();
    if (values.email !== "" && values.comments !== "") {
      /*
      io.emit("Contact-Us", {
        email: values.email,
        comments: values.comments,
      });
      */
    }
    return false;
  };

  React.useEffect(() => {
    /*
    io.on("Contact-Form-Received", (data) => {
      setValues({
        email: "",
        comments: "",
      });
      setAlerts([...alerts, data]);
      document.forms.commentForm.reset();
      if (!timer.current) timer.current = setTimeout(clearAlerts, 15000);
    });
    */
  });

  return (
    <SideView image="url(https://placehold.it/600x800)">
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Contact Us
      </Typography>
      {alerts.map((alert) => (
        <ActionAlerts
          color="success"
          component={<p key={alert.message}>{alert.message}</p>}
        />
      ))}
      <form
        className={classes.form}
        onSubmit={handleContact}
        id="commentForm"
        align="left"
      >
        <TextField
          ref={emailValue}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          onChange={handleChange}
          autoComplete="email"
          autoFocus
        />

        <TextField
          ref={commentsValue}
          margin="normal"
          required
          fullWidth
          id="comments"
          label="Comments"
          name="comments"
          onChange={handleChange}
          autoComplete="comments"
          placeholder="Comments"
          multiline={true}
          rows={3}
          rowsMax={3}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Send
        </Button>
      </form>
      <Box mt={0}>
        <Copyright />
        <RouterLink to="/">Home</RouterLink>
      </Box>
    </SideView>
  );
}

export { ContactUs };
