import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import InboxIcon from "@mui/icons-material/InboxOutlined";
import MailIcon from "@mui/icons-material/Mail";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  drawerContainer: {
    width: 250,
    paddingTop: 28,
    "& .MuiButtonBase-root": {
      paddingLeft: 40,
    },
  },
  openDrawerButton: {
    position: "absolute !important",
    zIndex: 1201,
    top: 5,
    left: 5,
    "&.MuiButtonBase-root": {
      backgroundColor: ({ drawerOpen }) => {
        console.log(!drawerOpen);
        return !drawerOpen ? "rgb(25 118 210 / 80%)" : "transparent";
      },
      color: ({ drawerOpen }) => (!drawerOpen ? "#fff" : "#1976d2"),
      "&:hover": {
        backgroundColor: ({ drawerOpen }) => {
          console.log(!drawerOpen);
          return !drawerOpen
            ? "rgb(25 118 210 / 70%)"
            : "rgba(25, 118, 210, 0.04)";
        },
      },
    },
  },
  link: {
    textDecoration: "none !important",
    color: "#000 !important",
  },
});

const listItems = [
  { text: "Map", path: "/" },
  { text: "Graphe (Orienté)", path: "oriented-graph" },
  { text: "Tableau de Bord", path: "dashboard" },
  { text: "Rapports", path: "repports" },
];

function CustomDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles({ drawerOpen });

  const handleOpenDrawer = (e, isOpen) => {
    setDrawerOpen(isOpen !== undefined ? isOpen : !drawerOpen);
  };

  return (
    <>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        className={classes.openDrawerButton}
        onClick={handleOpenDrawer}
      >
        {!drawerOpen ? <ArrowForward /> : <ArrowBack />}
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={(e) => handleOpenDrawer(e, false)}
        onOpen={(e) => handleOpenDrawer(e, true)}
      >
        <div
          className={classes.drawerContainer}
          onClick={(e) => handleOpenDrawer(e, false)}
        >
          <List>
            {listItems.map((item, index) => (
              <Link
                className={classes.link}
                to={item.path}
                key={`${item.text}-${item.path}`}
              >
                <ListItem button>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
          {/* <Divider /> */}
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default CustomDrawer;
