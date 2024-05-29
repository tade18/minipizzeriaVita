import './NavBar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Hidden, IconButton, Drawer } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {

  const[open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='navbar-appbar' position="absolute">
        <Toolbar /*sx={{color: '#c24848'}}*/>
        <Box flexGrow={1} display={'flex'} alignItems={'center'}>
                <Link to={"/"}><img width={"180px"} src={'./src/img/vitaLogo_Red.png'} alt='logo' height={'100px'}></img> </Link>
        </Box>

        <Hidden smDown>
          <Box display={'flex'}>
            <Link to={"/pizza"}><Button color="inherit">Pizza</Button></Link>
            <Link to={"/pizza"}><Button color="inherit">Zmrzlina</Button></Link>
            <Link to={"/"}><Button color="inherit">Ostatní</Button></Link>
          </Box>
        </Hidden>

        <Hidden smUp>
          <IconButton color='inherit' onClick={onOpenHandler}>
            <MenuIcon />
          </IconButton>
          <Drawer
           open={open}
           fullScreen
           fullWidth
           hideBackdrop
           PaperProps={{
            sx: { width: "50%" }
          }}
           >
           <AppBar position="static" sx={{ background: '#c24848'}}>
           <Toolbar>
            <IconButton color='inherit' onClick={onCloseHandler}>
                  <CloseIcon />
              </IconButton>
           </Toolbar>
           </AppBar>

              <Box display={'flex'} flexDirection={'column'} py={3} width={'100%'}>
              <Link to={"/pizza"}><Button color="inherit">Pizza</Button></Link>
              <Link to={"/pizza"}><Button color="inherit">Zmrzlina</Button></Link>
              <Link to={"/"}><Button color="inherit">Ostatní</Button></Link>
              </Box>
            
          </Drawer>
        </Hidden>

        </Toolbar>
      </AppBar>
    </Box>
  );
}