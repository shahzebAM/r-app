import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import arr from './upload';

const MappingCard = () => {

  return (

    <div className='main'>
      {arr.map((value) => (

        <Card className={'mycard'} style={{ backgroundColor: '#403F4C', marginTop: 20}} variant='outlined' sx={{ maxWidth: '15rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <CardContent style={{backgroundColor: '#6096BA', padding: 0}}>
            <Typography style={{color: '#a9a9a9', backgroundColor: '#403F4C', fontWeight: 'bold'}} align='center' gutterBottom variant="h6" component="div">
              {value.name}
            </Typography>

          </CardContent>
          
          <CardMedia style={{backgroundColor: '#403F4C'}}
          >
            <iframe frameborder="0" allow="autoplay" allowfullscreen="true" style={{ width: '100%', height: '100%' }} src={value.src}></iframe>
          </CardMedia>
          
          <CardActions style={{ justifyContent: 'center', backgroundColor: '#403F4C' }}>
            <Button variant='contained' style={{backgroundColor: '#2C2B3C'}} size="small" href={value.link}>Download</Button>
            
          </CardActions>
        </Card>

      ))}

    </div>
  )
}




function App() {
  return (
    <div>
      {MappingCard()}
    </div>

  )
}
export default App;

