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
            <Typography variant="h1">FAQ</Typography>
            
         
      
            <Typography variant="h6">What "Error while sending funds from Wallet" means. </Typography>
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
                You don't have enough $ERG
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                You don't have enough $COMET or Refundable tokens
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Wife ditched you.
              </ListItem>
            </List>
            <Typography variant="h6">What do to when "Error while sending funds from Wallet" appears </Typography>
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
                Buy enough $ERG
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Buy more $COMET if you have only refundable tickets until the amount is the same.(1 COMET=1 Refundable ticket)
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Get a new wife
              </ListItem>
            </List>

            <Typography variant="h6">What to do if "Failure to find contract with enough funds for your request! Try a smaller swap" error appears.</Typography>
         
              <Typography variant="p"> This is unlikly to happen but if it does you just have to swap a smaller portion until you are fully refunded. </Typography>


            <Typography variant="h6">Before hitting support try to:</Typography>
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
                Clear cache
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Disconnect your wallet through the dapp and then re-connect
              </ListItem>
              
            </List>

                
      
       
  
  
            <Button
              onClick={() => parent.open('https://t.me/CometErgoCommunity') }
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
              Support
            </Button>
          </Grid>
        </Grid>
        
      </>
    );
    
  
  };
  
  export default Social;
  