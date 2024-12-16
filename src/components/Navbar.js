import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = ['Home', 'Experience', 'Education', 'Projects', 'Contact'];

  return (
    <AppBar position="static" elevation={0} sx={{ 
      backgroundColor: 'background.paper',
      borderBottom: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.06)'
    }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1, sm: 0 } }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'primary.main',
              fontWeight: 600,
              '&:hover': {
                color: 'secondary.main',
              }
            }}
          >
            Bria Qaradaghy
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button 
                key={page}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                sx={{
                  color: 'primary.main',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'secondary.main',
                    transform: location.pathname === (page === 'Home' ? '/' : `/${page.toLowerCase()}`) 
                      ? 'scaleX(1)' 
                      : 'scaleX(0)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'background.paper',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page}
                  component={Link}
                  to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                  onClick={handleClose}
                  sx={{
                    color: location.pathname === (page === 'Home' ? '/' : `/${page.toLowerCase()}`)
                      ? 'primary.main'
                      : 'text.primary',
                    fontWeight: location.pathname === (page === 'Home' ? '/' : `/${page.toLowerCase()}`)
                      ? 600
                      : 400,
                  }}
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 