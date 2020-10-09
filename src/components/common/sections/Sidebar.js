/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview /components/common/sections/Sidebar.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";
import {
  List,
  ListItem,
  Link,
  Typography,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import { store } from "../../../initial-state";
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
  },
  listItem: {
    color: theme.palette.common.white,
    paddingLeft: `${theme.spacing(4)}px`,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: `${theme.spacing(1)}px`,
    },
  },
  link: {
    cursor: "pointer",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.grey.light,
    },
  },
}));
export function Sidebar(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      style={{
        width: "200px",
        height: "100%",
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Typography variant="h5">
        {process.env.REACT_APP_SIDEBAR_TITLE}
        <span
          style={{
            float: "right",
            cursor: "pointer",
          }}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch({
              type: "toggleSidebar",
              payload: !state.sidebar.isOpen,
            });
          }}
        >
          <small
            style={{
              border: `2px solid ${theme.palette.primary.light}`,
              borderRadius: `16px`,
            }}
          >
            x
          </small>
        </span>
      </Typography>
      <List>
        <ListItem className={classes.listItemTitle}>Somewhere!</ListItem>

        <ListItem className={classes.listItem}>
          <Link className={classes.link}>Some Link!</Link>
        </ListItem>
      </List>
    </div>
  );
}
