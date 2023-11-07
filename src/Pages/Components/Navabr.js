import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../Images/logo.svg';

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', borderBottom: '1px solid #ccc', px:10 }}>
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ width: 40, marginRight: 10 }} />
        <Typography variant="h6" className='sans' sx={{color:'#111827', fontSize:'24px'}}>
          Show Box
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
