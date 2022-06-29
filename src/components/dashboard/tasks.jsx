import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const Tasks = (props) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            total tâches
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {props.data}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'info.main',
              height: 56,
              width: 56,
            }}
          >
            <AssignmentIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
