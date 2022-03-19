import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import CustomDrawer from "./components/CustomDrawer";
import CustomMaps from "./components/Maps";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CustomDrawer />
      <CustomMaps />
    </div>
  );
}
export default App;
