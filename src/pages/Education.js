import { Container, Typography, Card, CardContent, Box, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  const education = {
    school: "Virginia Tech",
    degree: "Bachelor of Applied Science (BASc)",
    major: "Business Information Technology",
    duration: "2014 - 2018",
    grade: "4.0",
    activities: [
      "Secretary of United Muslim Relief (VT Branch)",
      "Intramural Soccer (Mens and Co-rec)",
      "Intramural Football (Mens and Co-rec)",
      "Intramural Ultimate Frisbee (Co-rec)",
      "Intramural Basketball"
    ],
    courses: [
      "Financial Accounting",
      "Intro to Business Analytics Modeling"
    ]
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <SchoolIcon fontSize="large" />
        Education
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography variant="h5" component="h3" gutterBottom>
                {education.school}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {education.degree}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {education.major}
              </Typography>
              <Typography variant="body2">
                {education.duration}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Grade: {education.grade}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Activities and Societies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {education.activities.map((activity, index) => (
                <Chip 
                  key={index} 
                  label={activity} 
                  variant="outlined" 
                  sx={{ margin: 0.5 }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Notable Courses
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {education.courses.map((course, index) => (
                <Chip 
                  key={index} 
                  label={course} 
                  color="primary" 
                  variant="outlined"
                  sx={{ margin: 0.5 }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Education; 