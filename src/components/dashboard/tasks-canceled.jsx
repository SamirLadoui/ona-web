import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const TasksCanceled = (props) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            total tâches annulées
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {props.data}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56,
            }}
          >
            <CloseIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
