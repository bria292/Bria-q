import { Container, Typography, Box, Paper } from '@mui/material';
import profilePic from '../assets/profile-pic.jpg';
import TravelMap from '../components/TravelMap';
import LiverpoolSection from '../components/LiverpoolSection';

function Home() {
  return (
    <Container maxWidth="md" sx={{ 
      py: { xs: 4, sm: 6 },
      px: { xs: 2, sm: 3 }
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: { xs: 3, sm: 4 }
      }}>
        <Box
          component="img"
          src={profilePic}
          alt="Bria Qaradaghy"
          sx={{
            width: { xs: 180, sm: 220 },
            height: { xs: 180, sm: 220 },
            borderRadius: '50%',
            border: '4px solid white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out',
            objectFit: 'cover',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
            }
          }}
        />
        
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4 }, 
            textAlign: 'center',
            backgroundColor: 'transparent',
            maxWidth: '100%'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #4A4E69 30%, #9A8C98 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 1.5, sm: 2 },
              fontSize: { xs: '2rem', sm: '2.5rem' }
            }}
          >
            Bria Qaradaghy
          </Typography>
          
          <Typography 
            variant="h5" 
            color="primary" 
            gutterBottom
            sx={{ 
              fontWeight: 500,
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            Software Engineer at Capital One
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              maxWidth: '600px',
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '0.95rem', sm: '1rem' },
              mt: { xs: 2, sm: 3 }
            }}
          >
            I am a graduate from Virginia Tech with a Bachelor's degree in Business Information Technology. 
            Currently working as an Associate Software Engineer at Capital One, specializing in JavaScript 
            and React.js development.
          </Typography>
        </Paper>
      </Box>
      <LiverpoolSection />
      <TravelMap />
    </Container>
  );
}

export default Home; 