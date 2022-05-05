import * as React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MuiNextLink from "@components/MuiNextLink";
import { MenuOutlined } from '@mui/icons-material';


const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map(({ title, path }, i) => (
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
      <MenuOutlined
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
      </MenuOutlined>
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

export default SideDrawer;