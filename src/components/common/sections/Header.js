/**
 * Copyright M.A.D. Computer Consulting LLC 2020
 *
 * @fileOverview /components/common/sections/Header.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  InputBase,
  Menu,
  MenuItem,
  fade,
  makeStyles,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { store } from "../../../initial-state";
import { QuickAccessLinks } from "./QuickAccessLinks";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: "10px",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ProminentAppBar() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {state.user.authenticated && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch({
                  type: "toggleSidebar",
                  payload: !state.sidebar.isOpen,
                });
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {!state.user.authenticated && (
            <Link
              component={RouterLink}
              size="small"
              color="inherit"
              variant="button"
              style={{ marginTop: "10px" }}
              to="/login"
            >
              Login
            </Link>
          )}
          <Typography className={classes.title} variant="h5" noWrap>
            {process.env.REACT_APP_APP_BAR_TITLE}
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(evt) => {
                evt.preventDefault();
                alert("Searching...");
              }}
            />
          </div>
          {state.user.authenticated && (
            <div style={{ marginTop: "2px" }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem component={RouterLink} to="/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem component={RouterLink} to="/my-account" onClick={handleClose}>
                  My account
                </MenuItem>
              </Menu>
            </div>
          )}
          <IconButton
            style={{ marginTop: "2px" }}
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch({
                type: "toggleAppBarMore",
                payload: !state.appMenu.isOpen,
              });
            }}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
        {state.appMenu.isOpen && <QuickAccessLinks />}
      </AppBar>
    </div>
  );
}

export function Header(props) {
  return <ProminentAppBar />;
}
