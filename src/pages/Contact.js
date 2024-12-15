import { Container, Typography, Box, Paper, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Me
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOnIcon color="primary" />
            <Typography>
              McLean, Virginia, United States
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LinkedInIcon color="primary" />
            <Link 
              href="https://www.linkedin.com/in/your-linkedin" 
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              LinkedIn Profile
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon color="primary" />
            <Link 
              href="mailto:your.email@example.com"
              underline="hover"
            >
              your.email@example.com
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact; 