import { Grid, Typography, Button, Box } from '@mui/material';
import LowerGradients from '@components/stylistic/LowerGradients';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from '@components/DiscordIcon';
import QqIcon from '@components/QqIcon';
import theme from '@styles/theme';
import Image from 'next/image';

const Hero = ({ title, subtitle }) => {
  return (
    <>
      <Box
        maxWidth="lg"
        sx={{
          position: 'relative',
          mx: 'auto',
          height: '0',
          pointerEvents: 'none',
          zIndex: '-100',
          overflow: 'visible',
        }}
        aria-hidden="true"
      >
        <LowerGradients />
      </Box>
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={5} sx={{ mt: { xs: 12, md: 6 } }}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
          <Typography variant="subtitle1">
            Join our communities:
          </Typography>

          <Box sx={{ my: '1rem' }}>
            <a href="https://t.me/CometErgoCommunity" target="_blank" rel="noreferrer">
              <Button
                startIcon={<TelegramIcon />}
                variant="contained"
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  py: '0.6rem',
                  px: '1.2rem',
                  m: '0.7rem',
                  textTransform: 'none',
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.hover,
                    boxShadow: 'none',
                  },
                  '&:active': {
                    backgroundColor: theme.palette.primary.active,
                  },
                }}
              >
                Telegram
              </Button>
            </a>
            <a
              href="https://discord.gg/p4A9KD5GRg"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                startIcon={<DiscordIcon />}
                variant="contained"
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  py: '0.6rem',
                  px: '1.2rem',
                  m: '0.7rem',
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
                Discord
              </Button>
            </a>
            <a
              href="https://twitter.com/CometMooning"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                startIcon={<TwitterIcon />}
                variant="contained"
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  py: '0.6rem',
                  px: '1.2rem',
                  m: '0.7rem',
                  textTransform: 'none',
                  backgroundColor: theme.palette.tertiary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.tertiary.hover,
                    boxShadow: 'none',
                  },
                  '&:active': {
                    backgroundColor: theme.palette.tertiary.active,
                  },
                }}
              >
                Twitter
              </Button>
            </a>
            <a
              href="https://www.instagram.com/comet_token/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                startIcon={<InstagramIcon />}
                variant="contained"
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  py: '0.6rem',
                  px: '1.2rem',
                  m: '0.7rem',
                  textTransform: 'none',
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.hover,
                    boxShadow: 'none',
                  },
                  '&:active': {
                    backgroundColor: theme.palette.primary.active,
                  },
                }}
              >
                Instagram
              </Button>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} sx={{ pb: { xs: 4, md: 16 } }}>
           <Image
            src="/chou.png"
            alt="Comet"
            layout="responsive"
            width="600"
            height="600"
            priority={true}
          /> 
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
