import {
  AutoGraphOutlined,
  FiberSmartRecordOutlined,
  HomeOutlined,
  MenuOutlined
} from '@mui/icons-material';
import { 
  Drawer, 
  Typography, 
  Box, 
  BottomNavigation, 
  BottomNavigationAction,
  Paper
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MuiNextLink from '@components/MuiNextLink';

const drawerLinks = [
  { title: 'Whitepaper', path: '/about' },
  { title: 'Roadmap', path: '/roadmap' },
  { title: 'Refundable ICO', path: '/ICO' },
];


const bottomNavLinks = [
  {
    label: 'Home',
    link: '/',
    icon: <HomeOutlined />,
  },
];

const root = { 
  position: 'fixed', 
  bottom: 0, 
  left: 0, 
  right: 0, 
  zIndex: 1
 };

const BottomNav = () => {
  const router = useRouter();
  const [state, setState] = useState({
    left: false,
  });
  const [value, setValue] = useState(router.pathname);

  const handleChange = (_, newValue) => {
    if (newValue != 'more') {
      setValue(newValue);
      router.push(newValue);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    if (router.pathname != value) {
      setValue('more')
    }
    bottomNavLinks.forEach((obj) => {
      if (router.pathname == obj.link) {
        setValue(obj.link)
        // console.log(router.pathname + ' == ' + obj.link)
      }
    })
    
  }, [router.pathname])

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {drawerLinks.map(({ title, path }, i) => (
        <Typography
          key={`${title}${i}`}
          sx={{
            ml: 5,
            my: 2,
          }}
        >
          <MuiNextLink sx={{ color: "common.white" }} href={path}>
            {title}
          </MuiNextLink>
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
    <Paper sx={root} elevation={6}>
      <BottomNavigation showLabels value={value} sx={{ height: '4rem', background: 'linear-gradient(0deg, rgba(29,29,32,1) 0%, rgba(40,40,45,1) 70%)' }} onChange={handleChange}>
        {bottomNavLinks.map((link, i) => (
            <BottomNavigationAction
              key={`${i}_${link.label}`}
              label={link.label}
              value={link.link}
              icon={link.icon}
            />
        ))}
        <BottomNavigationAction
            onClick={toggleDrawer("left", true)}
            key='more'
            label='More'
            value='more'
            icon={<MenuOutlined />}
          />
      </BottomNavigation> 
    </Paper>

    <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        sx={{
          ".MuiDrawer-paper": {
            
          },
        }}
      >
        {list("left")}
      </Drawer>
  </>
  );
};

export default BottomNav;
