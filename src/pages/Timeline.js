import { Container, Box, Typography, Paper } from '@mui/material';
import kurdistanMap from '../assets/kurdistan-map.png';

const TimelineEvent = ({ year, title, description, image, isLeft }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'flex-start', md: 'center' },
      gap: 4,
      mb: 6,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: { xs: '20px', md: '50%' },
        transform: { xs: 'none', md: 'translateX(-50%)' },
        top: '50%',
        bottom: '-40px',
        width: '2px',
        backgroundColor: 'secondary.main',
        opacity: 0.5,
        zIndex: 0
      },
      '&:last-child::before': {
        display: 'none'
      }
    }}
  >
    <Box
      sx={{
        flex: 1,
        textAlign: { xs: 'left', md: isLeft ? 'right' : 'left' },
        order: { xs: 2, md: isLeft ? 1 : 2 },
        position: 'relative',
      }}
    >
      <Typography 
        variant="h5" 
        color="primary.main" 
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        {year}
      </Typography>
      <Typography 
        variant="h6" 
        gutterBottom
        sx={{ color: 'text.primary', fontWeight: 500 }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        color="text.secondary"
        sx={{ lineHeight: 1.8 }}
      >
        {description}
      </Typography>
    </Box>

    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        border: '3px solid',
        borderColor: 'background.default',
        zIndex: 1,
        boxShadow: '0 0 0 3px rgba(74, 78, 105, 0.1)',
        display: { xs: 'none', md: 'block' }
      }}
    />

    <Box
      sx={{
        position: 'absolute',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        border: '3px solid',
        borderColor: 'background.default',
        zIndex: 1,
        boxShadow: '0 0 0 3px rgba(74, 78, 105, 0.1)',
        display: { xs: 'block', md: 'none' }
      }}
    />

    {image && (
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          order: { xs: 1, md: isLeft ? 2 : 1 },
          overflow: 'hidden',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Paper>
    )}
  </Box>
);

function Timeline() {
  const events = [
    {
      year: "1996",
      title: "Born in Kurdistan",
      description: "Born on June 6, 1996 in Kurdistan, marking the beginning of my journey.",
      image: kurdistanMap,
      isLeft: true
    },
    {
      year: "2014 - 2018",
      title: "Virginia Tech",
      description: "Pursued Bachelor's degree in Business Information Technology at Virginia Tech.",
      isLeft: false
    },
    {
      year: "2017",
      title: "First Tech Internship",
      description: "IT Engineer Intern at Ingersoll Rand in Minneapolis, Minnesota.",
      isLeft: true
    },
    {
      year: "2018 - 2019",
      title: "Started Professional Career",
      description: "Business Analyst at CGI in Fairfax, VA.",
      isLeft: false
    },
    {
      year: "2019 - 2020",
      title: "Career Growth",
      description: "Business & Technology Analyst at Accenture Federal Services in Washington DC.",
      isLeft: true
    },
    {
      year: "2020 - 2023",
      title: "Senior Position",
      description: "Senior Business and Technology Analyst at Accenture Federal Services.",
      isLeft: false
    },
    {
      year: "2023 - Present",
      title: "Software Engineering",
      description: "Software Engineer at Capital One in McLean, Virginia.",
      isLeft: true
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
        My Journey
      </Typography>

      <Box sx={{ position: 'relative' }}>
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            {...event}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Timeline; 