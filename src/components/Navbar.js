import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = [
    'Home', 
    'Experience', 
    'Education', 
    'Projects', 
    'Timeline', 
    'Contact'
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.06)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1.5, sm: 2 } }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'primary.main',
              fontWeight: 700,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              letterSpacing: '0.5px',
              '&:hover': {
                color: 'secondary.main',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease-in-out'
            }}
          >
            Bria Qaradaghy
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <Button 
                key={page}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                sx={{
                  color: 'primary.main',
                  position: 'relative',
                  px: 2,
                  py: 1,
                  minWidth: 'auto',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: 6,
                    left: 0,
                    backgroundColor: 'secondary.main',
                    transform: location.pathname === (page === 'Home' ? '/' : `/${page.toLowerCase()}`) 
                      ? 'scaleX(1)' 
                      : 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    opacity: 0.8,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'secondary.main',
                    transform: 'translateY(-1px)',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                  },
                  transition: 'all 0.2s ease-in-out'
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
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
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
                  borderRadius: '12px',
                  mt: 1,
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
                      ? 'secondary.main'
                      : 'primary.main',
                    fontWeight: location.pathname === (page === 'Home' ? '/' : `/${page.toLowerCase()}`)
                      ? 600
                      : 400,
                    py: 1.5,
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    }
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