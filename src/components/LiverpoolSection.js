import { Paper, Typography, Box } from '@mui/material';
import liverpoolImage from '../assets/liverpool.png';
import PremierLeagueStandings from './PremierLeagueStandings';

const LiverpoolSection = () => {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: { xs: 2, sm: 4 }, 
        mt: 4,
        backgroundColor: 'transparent',
        gap: { xs: 3, md: 4 }
      }}
    >
      <Box sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 3, md: 4 },
        mb: 4
      }}>
        <Box
          component="img"
          src={liverpoolImage}
          alt="Liverpool FC"
          sx={{
            width: { xs: '100%', md: '300px' },
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }}
        />
        
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              color: '#C8102E', // Liverpool Red
              fontWeight: 600,
              mb: 2
            }}
          >
            You'll Never Walk Alone
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              lineHeight: 1.8,
              '& strong': {
                color: 'text.primary',
                fontWeight: 500
              }
            }}
          >
            I'm a proud Liverpool fan, deeply passionate about the club's rich history and relentless spirit. 
            From the glory days of Shankly to the modern triumphs under Klopp, I celebrate the traditions of 
            hard work, resilience, and unity that define Liverpool. With six European Cups, 19 league titles, 
            and countless unforgettable moments, supporting this club isn't just about football—it's about 
            being part of something truly special. YNWA.
          </Typography>
        </Box>
      </Box>
      
      <Typography 
        variant="h6" 
        gutterBottom
        sx={{
          color: '#C8102E',
          fontWeight: 600,
        }}
      >
        Premier League Standings
      </Typography>
      <PremierLeagueStandings />
    </Paper>
  );
};

export default LiverpoolSection; 