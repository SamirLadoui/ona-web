import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import ModeIcon from '@mui/icons-material/Mode';

export const TasksDraft = (props) => (
  <Card sx={{ height: '100%' }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            total tâches brouillons
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {props.data}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'default.main',
              height: 56,
              width: 56,
            }}
          >
            <ModeIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
