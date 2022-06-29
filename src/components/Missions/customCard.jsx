import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const CustomCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Type
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
            QD#0001
          </Typography>
          <Chip label="Draft" color="default" />
          <Chip label="Cancel" color="error" />
          <Chip label="Confirmer" color="success" />
        </div>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          15/06/2022
        </Typography>
        <Typography variant="body2">Bla Bla Bla</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button variant="contained" color="info" small>
          Voir
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
