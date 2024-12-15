import { Container, Typography, Box, Avatar } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        mt: 8 
      }}>
        <Avatar
          sx={{ width: 200, height: 200, mb: 4 }}
          alt="Bria Qaradaghy"
          src="/path-to-your-photo.jpg"
        />
        <Typography variant="h3" component="h1" gutterBottom>
          Bria Qaradaghy
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Software Engineer at Capital One
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mt: 2 }}>
          I am a graduate from Virginia Tech with a Bachelor's degree in Business Information Technology. 
          Currently working as an Associate Software Engineer at Capital One, specializing in JavaScript 
          and React.js development.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home; 