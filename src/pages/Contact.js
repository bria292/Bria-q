import { Container, Typography, Box, Button, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  // Real email address stored securely
  const realEmail = 'bria292@gmail.com';
  
  // Masked email for display
  const maskedEmail = 'b***2@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${realEmail}`;
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 6,
          background: 'linear-gradient(45deg, #4A4E69 30%, #9A8C98 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get in Touch
      </Typography>

      <Paper 
        elevation={0}
        sx={{ 
          p: 4, 
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 3,
          alignItems: 'center' 
        }}>
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            onClick={handleEmailClick}
            sx={{
              width: '100%',
              maxWidth: 300,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s',
              }
            }}
          >
            {maskedEmail}
          </Button>

          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/bria-qaradaghy/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: '100%',
              maxWidth: 300,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s',
              }
            }}
          >
            LinkedIn Profile
          </Button>

          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/briaqua"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: '100%',
              maxWidth: 300,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s',
              }
            }}
          >
            GitHub Profile
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact; 