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
        
        <Grid item xs={12} md={6} sx={{ mb: 10 }}>
          <Typography variant="h2">Social</Typography>
          <Typography variant="p">
            The Comet Social lets you keep track of all your Ergo assets,
            and displays all your staked and vested tokens, even when
            they&apos;re locked in smart contracts and not in your wallet.
          </Typography>
          <Typography variant="p">Other features include:</Typography>
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
              Summarized portfolio holdings, including historic chart data.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              List of all held assets, including NFTs, with the ability to zoom
              in on any asset for more details.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Price data pulled from various sources, such as Ergodex and Ergo
              Oracles, summarized in a visual way.
            </ListItem>
          </List>

          <Button
            onClick={() => router.push('/Social')}
            variant="contained"
            sx={{
              color: '#fff',
              fontSize: '1rem',
              py: '0.6rem',
              px: '1.6rem',
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
            Explore Social
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Social;
