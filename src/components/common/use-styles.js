/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview use-styles.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import { fade, makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const style = theme => {
  return {
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 200
      }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    },
    root: {
      width: "100%",
      transform: "translateZ(0px)",
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex"
    },
    radioGroup: {
      margin: theme.spacing(1, 0)
    },
    speedDial: {
      position: "fixed",
      "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
        bottom: theme.spacing(2),
        right: theme.spacing(2)
      },
      "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
        top: theme.spacing(2),
        left: theme.spacing(2)
      }
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    drawerPaper: {
      width: drawerWidth - 1,
      overflow: "hidden"
    },
    content: {
      flexGrow: 1,
      paddingX: theme.spacing(0),
      paddingY: theme.spacing(0)
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      paddingLeft: "240px",
      ...theme.mixins.toolbar
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    fixedHeight: {
      height: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    formControl: {
      display: "flex"
    },
    "@global": {
      ul: {
        margin: 0,
        padding: 0
      },
      li: {
        listStyle: "none"
      }
    },
    heroContent: {
      padding: theme.spacing(3, 0, 2),
      margin: theme.spacing(0, 0, 1, 0)
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.grey[700]
          : theme.palette.grey[200]
    },
    cardPricing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: theme.spacing(2)
    },
    lightBulb: {
      verticalAlign: "middle",
      marginRight: theme.spacing(1)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "28.13%" // 16:9
    },
    cardContent: {
      flexGrow: 1,
      width: "100%"
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0)
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff"
    },
    paper: {
      padding: theme.spacing(2),
    }
  };
};

export const useStyles = makeStyles(theme => ({ ...style(theme) }));
