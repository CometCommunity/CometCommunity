import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
} from '@mui/material';
import theme from '@styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';



const Social = () => {
  const mtheme = useTheme();
  const matches = useMediaQuery(mtheme.breakpoints.up('md'));
  const router = useRouter();

  return (
    <>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={6} ml={5} sx={{ mb: 10 }}>
          <Typography variant="h1">Refundable ICO</Typography>
          
          <Typography variant="h2">
            What is Refundable ICO
          </Typography>
          <Typography variant="p">
            Ico stands for Initial coin offering. We will do a refundable ico. That means that you are 100% safe with your investement. You can buy our ICO and refund any time.
          </Typography>
          <Typography variant="p">Reasons to Refund.</Typography>
          <List
            sx={{
              mt: -4,
              pt: 0,
              ml: 6,
              mb: 3,
              listStyleType: 'disc',
              color: theme.palette.text.secondary,
              fontSize: '1.125rem',
            }}
          >
            <ListItem sx={{ display: 'list-item' }}>
              Ergo pumps but $COMET dumps. 
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Founders of $COMET decide to go for cigarettes and never return.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Wife ditched you.
            </ListItem>
          </List>
          <Typography variant="p">How to buy Refundable ICO?</Typography>
          <List
            sx={{
              mt: -4,
              pt: 0,
              ml: 6,
              mb: 3,
              listStyleType: 'disc',
              color: theme.palette.text.secondary,
              fontSize: '1.125rem',
            }}
          >
            <ListItem sx={{ display: 'list-item' }}>
              1.Connect your wallet.
              </ListItem>
            <ListItem sx={{ display: 'list-item'}}>
             2.Type the amount of ergs you want.
            </ListItem>
            <ListItem sx={{ display: 'list-item'}}>
             3.Approve the transtaction and receive your $COMET tokens.
            </ListItem>
          </List>
          <Typography variant="p">How to Refund?</Typography>
          <List
            sx={{
              mt: -4,
              pt: 0,
              ml: 6,
              mb: 3,
              listStyleType: 'disc',
              color: theme.palette.text.secondary,
              fontSize: '1.125rem',
            }}
          >
            <ListItem sx={{ display: 'list-item' }}>
              1.Connect your wallet.
              </ListItem>
            <ListItem sx={{ display: 'list-item'}}>
             2.Type the amount of Refund tokens you want.
            </ListItem>
            <ListItem sx={{ display: 'list-item'}}>
             3.Approve the transaction and receive your Ergs Back.
            </ListItem>
          </List>
          <Typography variant="p">Because there was a problem with the last smart contract we change it. So if your token looks like that: "$COMET Refund Ticket" hit the old refund button</Typography>



          <Button
            onClick={() => router.push('/Refundableico')}
            variant="contained"
            sx={{
              color: '#fff',
              fontSize: '1rem',
              py: '0.6rem',
              px: '1.6rem',
              ml: '4rem',
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
            Buy and get Rekt
            (PLEASE DON'T BUY)
          </Button>
          <Button
                    onClick={() => router.push('/faq')}
            variant="contained"
            sx={{
              color: '#fff',
              fontSize: '1rem',
              py: '0.6rem',
              px: '1.6rem',
              ml: '4rem',
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
            FAQ
            
          </Button>
          <Button
                  onClick={() => {router.push("/Refundableicoold")}}
          variant="contained"
          sx={{
            color: '#fff',
            fontSize: '1.6rem',
            py: '0.6rem',
            px: '2.5rem',
            ml: '4rem',
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
          Refund old tickets.
          
        </Button>
        </Grid>        
      </Grid>
      
    </>
  );
  

};

export default Social;
