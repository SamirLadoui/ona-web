import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const TasksConfirmed = (props) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            total tâches confirmées
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {props.data}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56,
            }}
          >
            <CheckIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
