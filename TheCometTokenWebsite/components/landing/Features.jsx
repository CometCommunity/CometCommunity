import { Box, CardContent, Grid, Typography } from '@mui/material';

const Features = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '768px',
          }}
        >
          <Typography variant="h2">
          MEME MONEY FOR ORDINARY PEOPLE
          </Typography>
          <Typography variant="subtitle1">
            We simply have fun and make MEMES. Perhaps a bit about tokenomics, but mainly fun and MEMES
          </Typography>
          <Typography variant="subtitle1">
            Here are just a few Memes:
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3} alignItems="stretch" sx={{ mb: 6, mt: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <CardContent>
              <Box
                component="img"
                alt=""
                height={300}
                width={300}
                sx={{
                  margin: 'auto',
                  display: 'block',
                }}
                src="comet-erg.png"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={{ my: 3 }}
              >
                Comet-erg
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <CardContent>
              <Box
                component="img"
                alt=""
                height={300}
                width={300}
                sx={{
                  margin: 'auto',
                  display: 'block',
                }}
                src="comet-musk.png"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={{ my: 3 }}
              >
                Musk holds Comet
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <CardContent>
              <Box
                component="img"
                alt=""
                height={300}
                width={300}
                sx={{
                  margin: 'auto',
                  display: 'block',
                }}
                src="comet-gold.png"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={{ my: 3 }}
              >
                Comet is the new gold
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Features;
