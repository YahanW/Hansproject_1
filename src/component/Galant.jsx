import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Greg from '../asset/pexels-pixabay-220453.jpg'
import Acu from '../asset/accu.jpg';

export default function Galant() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Acu}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Acupuncture
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Galant
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' className='w-full' >Book Now</Button>
      </CardActions>
    </Card>
  );
}