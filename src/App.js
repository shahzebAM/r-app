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

        <Card className={'mycard'} style={{ backgroundColor: '#C5D8D1', marginTop: 20}} variant='outlined' sx={{ maxWidth: '15rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <CardContent style={{backgroundColor: '#6096BA', padding: 0}}>
            <Typography style={{color: '#000', backgroundColor: '#C5D8D1', fontWeight: 'bold'}} align='center' gutterBottom variant="h6" component="div">
              {value.name}
            </Typography>

          </CardContent>
          
          <CardMedia style={{backgroundColor: '#C5D8D1'}}
          >
            <iframe frameborder="0" allow="autoplay" allowfullscreen="true" style={{ width: '100%', height: '100%' }} src={value.src}></iframe>
          </CardMedia>
          
          <CardActions style={{ justifyContent: 'center', backgroundColor: '#C5D8D1' }}>
            <Button variant='contained' style={{backgroundColor: '#12263A'}} size="small" href={value.link}>Download</Button>
            
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

