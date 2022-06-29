import * as React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomDrawer from './components/CustomDrawer';
import CustomMaps from './components/Maps';
import Missions from './components/dashboard';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <CustomDrawer />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/" element={<CustomMaps />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
