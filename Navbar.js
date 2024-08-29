import React from 'react'
import { Link } from 'react-router-dom'
import { List } from '@mui/material';
import { createBrowserRouter } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';

import { Button, Icon } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import SearchIcon from '@mui/icons-material/Search';

const Pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/aboutPage' },
  { title: 'Project', path: '/projectPage' },
  { title: 'Contact ', path: '/contactPage' },
  
];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),

  },
  marginLeft: 0,
  width: '100%',


  [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',



}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
              width: '20ch',

          },
      },
  },
}));


export default function Navbar() {
  
  return (
    
      <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backdropFilter: 'blur(7px)', background: 'linear-gradient(45deg,rgba(255,255,255,0.1),rgba(255,255,255,0.15))', color: 'black' }}>
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 4 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <div >
                        <Icon style={{ paddingRight: '40px', paddingTop: '10px' }}>
                        <img width={'30px'} height={'30px'} src='https://1.bp.blogspot.com/-vdm5pSwjmeI/YKm-46LEijI/AAAAAAAATbQ/ySxCiWmf_Tk-Jasqz4STic1hVcLt5yCtwCLcBGAsYHQ/s0/Nike%2BLogo%2B-%2BDownload%2BFree%2BPNG.png'></img>
                        </Icon>
                    </div> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color:'Black' } }}

                    >
                        PAYAL THAKRE.in
                    </Typography>



                    <List sx={{ display: 'flex' }}>
                        {Pages.map((page) => (
                            <ListItem key={page.title} disablePadding>
                                <Button component={Link} to={page.path}>
                                    <ListItemButton sx={{ textAlign: 'center', height: '20px', color:'Black'}}>
                                        <ListItemText primary={page.title} />
                                    </ListItemButton>
                                </Button>
                            </ListItem>
                        ))}
                    </List>



                    <Search>

                        <SearchIconWrapper>

                            <SearchIcon />

                        </SearchIconWrapper>

                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            
                        />




                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
  )
}
