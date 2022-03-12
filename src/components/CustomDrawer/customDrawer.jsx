import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  drawerContainer: {
    width: 250,
  },
  openDrawerButton: {
    position: "absolute",
    zIndex: 1201,
  },
});

function CustomDrawer() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(!drawerOpen);
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
        // onClose={toggleDrawer(anchor, false)}
        // onOpen={toggleDrawer(anchor, true)}
      >
        <div className={classes.drawerContainer}></div>
      </SwipeableDrawer>
    </>
  );
}

export default CustomDrawer;
