import { 
  Typography, 
  Box, 
  Container, 
  Grid, 
  Button,
  TextField,
  Divider, 
} from '@mui/material';
import CenterTitle from '@components/CenterTitle';
import {do_swap} from '../utils/yoroiUtils';
import {do_refund} from '../utils/yoroiUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import theme from '../styles/theme';

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}
function user_input()
{
  var str = document.getElementById("Ergs").value;
  return str;
}

function user_input_refund()
{ 
  var str = document.getElementById("refund").value;
  return str;
}



const gridBox = {
  background: 'rgba(35, 35, 39, 0.7)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  p: '1rem',
  color: '#fff',
  borderRadius: 2,
  border: 1,
  borderColor: 'rgba(46,46,51,1)'
}

const paperStyle = {
  p: 3,
  borderRadius: 2,
  height: '100%',
};

const Token = () => {
  
  

return (
  <>
      <Container maxWidth="lg" sx={{ mb: '3rem' }}>
          <CenterTitle s
              title="Refundable ICO"
              subtitle="Buy $COMET now and Refund whenever you want in 3 years period. Or Hodl and get Rekted"
              main={true}
          />

<ToastContainer />
                 
                  <Divider sx={{ mt: 6, mb: 6 }} />
                  <Grid item xs={12}>
                  <Typography variant="h3">Buy $COMET (Don't buy)</Typography>
                  <Typography variant="p"><b>1$ERG=150.000 $COMET</b></Typography>

                  <TextField
                    InputProps={{ disableUnderline: true }}
                    required
                    fullWidth
                    id="Ergs"
                    label="Put here how many ergs you want to waste buying $COMET"
                    name="Ergs"
                    type="numbers"
                    variant="filled"
                    helperText={
                      'Enter a valid Erg amount'
                    }
                    

                    
                  />
                </Grid>
                <Divider sx={{ mt: 6, mb: 6 }} />
                  <Grid item xs={12}>
                  <Typography variant="h3">Refund</Typography>
                  <Typography variant="p">Please write how many $COMET tokens you want to return.</Typography>
                  <Typography variant="p"><b>1$COMET Refund Ticket=1 $COMET</b></Typography>


                  <TextField
                    InputProps={{ disableUnderline: true }}
                    required
                    fullWidth
                    id="refund"
                    label="Put Here the refund tokens here"
                    name="Refundtokens"
                    type="numbers"
                    variant="filled"
                    helperText={
                      'Enter a valid refund token amount'
                    }

                    
                  />
                </Grid>

               

                  <Button
                  onClick={() => {
                    
                    do_swap(document.getElementById("Ergs").value);
                  }}
          variant="contained"
          sx={{
            color: '#fff',
            fontSize: '1.6rem',
            py: '1rem',
            px: '2.5rem',
            ml: '31rem',
            mt: '1rem',
            textTransform: 'none',
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.hover,
              boxShadow: 'none',
            },
            '&:active': {
              backgroundColor: theme.palette.secondary.active,
            },
          }}
        >
          BUY(Rekt)
          
        </Button>
        <Button
                  onClick={() => {
                    
                      do_refund(document.getElementById("refund").value);
                    }}
          variant="contained"
          sx={{
            color: '#fff',
            fontSize: '1.6rem',
            py: '1rem',
            px: '2.5rem',
            ml: '31rem',
            mt: '1rem',
            textTransform: 'none',
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.hover,
              boxShadow: 'none',
            },
            '&:active': {
              backgroundColor: theme.palette.secondary.active,
            },
          }}
        >
          Refund
          
        </Button>

        


      </Container>


  

  </>
);
};

export default Token;