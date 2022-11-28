import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import arr from './upload';

const MappingCard = () => {
    const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (

    <div className='main'>
      {arr.map((value) => (

        <div class="container">
          <div class="cards">
            <div style={{ textAlign: 'center' }}>
              <div class="card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: 5, color: "#e71d35c9" }}>{value.name}</h3>
                <iframe frameborder="0" allow="autoplay" allowfullscreen="true" style={{ width: '100%', height: '100%', backgroundColor: '#000' }} src={value.src}></iframe>
                <Button onClick={handleClick({
                           vertical: 'bottom',
                           horizontal: 'center',
                           })} 
                id='btn' variant='text' size="small" href={value.link}>Download</Button>
                <Snackbar
                   anchorOrigin={{ vertical, horizontal }}
                   open={open}
                   autoHideDuration={1500}
                   onClose={handleClose}
                   message="Download Started Sucessfully"
                   key={vertical + horizontal}
                />
                     
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

