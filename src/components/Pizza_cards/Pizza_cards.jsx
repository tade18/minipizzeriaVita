import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Pizza_cards(props) {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.popis}
          </Typography>
          <Typography variant='h2' >
            <CardActionArea>
                 {props.price}
            </CardActionArea>
         
          </Typography>
        </CardContent>
    </Card>
    </>
  );
}
