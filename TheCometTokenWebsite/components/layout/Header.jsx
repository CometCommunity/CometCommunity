import { AppBar, Toolbar, Box, IconButton, useScrollTrigger, Button } from '@mui/material';
import MuiNextLink from '@components/MuiNextLink';
import Navbar from '@components/navigation/Navbar';
import theme from '../../styles/theme';
import { cloneElement } from 'react';
import { useAddWallet } from 'utils/AddWalletContext'
import { useWallet } from 'utils/WalletContext';
import AddWallet from '@components/AddWallet';
import Image from 'next/image'

export const navLinks = [
  { title: `Whitepaper`, path: `/about` },
  { title: `Roadmap`, path: `/RoadMap` },
  { title: `Refundable ICO`, path: `/ICO` },
];

function dumb() {
  let text
  let person = prompt("I understand I am dumb for trying to flip shitcoins:Write 'i am dumb ' to procced", "i am smart");
  if (person == null || person == "i am dumb") {
    window.open("https://app.ergodex.io/" , '_blank').focus();
  } else if (person == null || person == "i am smart"){
    alert('Good for you');
  }
}

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'background' : 'transparent'
  });
}

const Header = () => {
  const { wallet } = useWallet()
  const { setAddWalletOpen } = useAddWallet()
  

   const walletButtonText = wallet ? wallet : 'Connect Wallet' 
 

  const handleClickOpen = (() => {
    setAddWalletOpen(true)
  })

  return (
    <>
    <AddWallet />
      <ElevationScroll>
        <AppBar color="transparent" enableColorOnDark sx={{ 
          p: 0, 
          display: 'flex', 
          alignItems: 'center', 
          // background: theme.palette.background.default
        }}>
          <Toolbar sx={{ 
            maxWidth: 'lg', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            width: '100%',
            // backgroundColor: theme.palette.background.default 
          }}>

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Box sx={{ display: 'inline-flex' }} >
                <MuiNextLink activeClassName='active' href='/' sx={{ pr: '2rem' }}>
                  <IconButton>
                    <Image priority src="/favicon-32x32.png" alt="Comet Logo" width="70" height="70" />
                    {/* <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <linearGradient id="b" x2="32" y1="8" y2="8" gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme.palette.primary.main} offset=".2813"/>
                        <stop stopColor={theme.palette.tertiary.main} offset="1"/>
                      </linearGradient>
                      <polygon points="27.3 4.7 16 0 4.7 4.7 0 16 7.8 16 10.2 10.2 16 7.8 21.8 10.2 24.2 16 32 16" fill="url(#b)"/>
                      <linearGradient id="a" x2="32" y1="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme.palette.primary.main} offset=".2864"/>
                        <stop stopColor={theme.palette.primary.main} stopOpacity="0" offset="1"/>
                      </linearGradient>
                      <polygon points="24.2 16 21.8 21.8 16 24.2 10.2 21.8 7.8 16 0 16 4.7 27.3 16 32 27.3 27.3 32 16" fill="url(#a)"/>
                    </svg> */}
                  </IconButton>
                </MuiNextLink>
              </Box>
              <Box sx={{ display: 'inline-flex' }} >
                <Navbar navLinks={navLinks} />
              </Box>
            </Box>

          { <Box sx={{ display: 'flex' }}>
              <Button 
                variant="contained"
                id="walletButton"
                sx={walletButtonSx}
                onClick={handleClickOpen}
              >
                {walletButtonText}
              </Button>
                  </Box> }

              {/* {isMobile && <SideDrawer navLinks={navLinks} />} */}

              <Box sx={{ display: 'flex' }}>
              <Button 
                variant="contained"
                id="trade"
                sx={tradesx}
                onClick={dumb}
              >
                Get Rekt
              </Button>
                  </Box>


          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;

const walletButtonSx = {
  color: '#fff',
  fontSize: '1rem',
  px: '1.2rem',
  mr: '1rem',
  textTransform: 'none',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
      backgroundColor: theme.palette.primary.hover,
      boxShadow: 'none',
  },
  '&:active': {
      backgroundColor: theme.palette.primary.active,
  },
  textOverflow: 'ellipsis',
  maxWidth: '10em',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  
}
const tradesx = {
  color: '#fff',
  fontSize: '1rem',
  px: '1.2rem',
  textTransform: 'none',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
      backgroundColor: theme.palette.primary.hover,
      boxShadow: 'none',
  },
  '&:active': {
      backgroundColor: theme.palette.primary.active,
  },
  textOverflow: 'ellipsis',
  maxWidth: '10em',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}
