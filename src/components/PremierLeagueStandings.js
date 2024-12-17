import { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import axios from 'axios';

// Mock data for development/fallback
const mockStandings = [
  {
    position: 1,
    team: {
      id: 64,
      name: "Liverpool FC",
      shortName: "Liverpool",
      crest: "https://crests.football-data.org/64.png",
    },
    playedGames: 20,
    won: 15,
    draw: 4,
    lost: 1,
    points: 49,
    goalDifference: 32
  },
  {
    position: 2,
    team: {
      id: 65,
      name: "Manchester City",
      shortName: "Man City",
      crest: "https://crests.football-data.org/65.png",
    },
    playedGames: 20,
    won: 14,
    draw: 4,
    lost: 2,
    points: 46,
    goalDifference: 28
  },
  {
    position: 3,
    team: {
      id: 57,
      name: "Arsenal",
      shortName: "Arsenal",
      crest: "https://crests.football-data.org/57.png",
    },
    playedGames: 20,
    won: 13,
    draw: 4,
    lost: 3,
    points: 43,
    goalDifference: 25
  },
  {
    position: 4,
    team: {
      id: 73,
      name: "Tottenham Hotspur",
      shortName: "Spurs",
      crest: "https://crests.football-data.org/73.png",
    },
    playedGames: 20,
    won: 12,
    draw: 3,
    lost: 5,
    points: 39,
    goalDifference: 12
  },
  {
    position: 5,
    team: {
      id: 66,
      name: "Manchester United",
      shortName: "Man United",
      crest: "https://crests.football-data.org/66.png",
    },
    playedGames: 20,
    won: 11,
    draw: 2,
    lost: 7,
    points: 35,
    goalDifference: 6
  }
];

const PremierLeagueStandings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://localhost:5001/api/standings',
          withCredentials: true,
          timeout: 5000
        });

        if (response.data && response.data.standings && response.data.standings[0]) {
          setStandings(response.data.standings[0].table);
        } else {
          throw new Error('Invalid data structure received');
        }
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err.response?.data || err.message);
        setError('Unable to load live standings. Using cached data.');
        setStandings(mockStandings);
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {error && (
        <Alert severity="info" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <TableContainer 
        component={Paper} 
        sx={{ 
          mt: 3,
          maxHeight: 400,
          backgroundColor: 'background.paper',
          '& .MuiTableCell-root': {
            borderColor: 'rgba(0, 0, 0, 0.08)',
          },
          '& .liverpool-row': {
            backgroundColor: 'rgba(200, 16, 46, 0.05)',
            fontWeight: 'bold',
          }
        }}
      >
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Pos</TableCell>
              <TableCell>Club</TableCell>
              <TableCell align="center">MP</TableCell>
              <TableCell align="center">W</TableCell>
              <TableCell align="center">D</TableCell>
              <TableCell align="center">L</TableCell>
              <TableCell align="center">GD</TableCell>
              <TableCell align="center">Pts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {standings.map((team) => (
              <TableRow 
                key={team.team.id}
                className={team.team.name === 'Liverpool FC' ? 'liverpool-row' : ''}
              >
                <TableCell>{team.position}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img 
                      src={team.team.crest} 
                      alt={team.team.name}
                      style={{ width: 20, height: 20 }}
                    />
                    {team.team.shortName || team.team.name}
                  </Box>
                </TableCell>
                <TableCell align="center">{team.playedGames}</TableCell>
                <TableCell align="center">{team.won}</TableCell>
                <TableCell align="center">{team.draw}</TableCell>
                <TableCell align="center">{team.lost}</TableCell>
                <TableCell align="center">{team.goalDifference}</TableCell>
                <TableCell align="center">{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PremierLeagueStandings; 