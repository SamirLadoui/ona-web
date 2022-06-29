import React from 'react';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomCard from './customCard';

const Missions = () => {
  return (
    <Box sx={{ marginLeft: 5 }}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={6}>
          <CustomCard />
        </Grid>
        <Grid item md={3} xs={6}>
          <CustomCard />
        </Grid>
        <Grid item md={3} xs={6}>
          <CustomCard />
        </Grid>
        <Grid item md={3} xs={6}>
          <CustomCard />
        </Grid>
        <Grid item md={3} xs={6}>
          <CustomCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Missions;
