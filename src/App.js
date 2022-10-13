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

        <div class="container">
          <div class="cards">
            <div style={{ textAlign: 'center' }}>
              <div class="card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: 5, color: "#e71d35c9" }}>{value.name}</h3>
                <iframe frameborder="0" allow="autoplay" allowfullscreen="true" style={{ width: '100%', height: '100%', backgroundColor: '#000' }} src={value.src}></iframe>
                <Button id='btn' variant='text' size="small" href={value.link}>Download</Button>
              </div>



            </div>
          </div>
        </div>

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

