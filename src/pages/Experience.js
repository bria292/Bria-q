import { Container, Typography, Card, CardContent, Box } from '@mui/material';

function Experience() {
  const experiences = [
    {
      company: "Capital One",
      role: "Software Engineer",
      duration: "Feb 2023 - Present",
      location: "McLean, Virginia",
      skills: ["PostgreSQL", "JavaScript", "React.js"]
    },
    {
      company: "Accenture Federal Services",
      role: "Senior Business and Technology Analyst",
      duration: "Nov 2020 - Jan 2023",
      location: "Washington DC",
      description: "• Identify and define detailed product requirements and use cases\n" +
                  "• Participate in user and task analysis\n" +
                  "• Develop product requirements based on input from various sources\n" +
                  "• Wrote regression and smoke test automation scripts"
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Professional Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h3">
              {exp.role}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {exp.company}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {exp.duration} | {exp.location}
            </Typography>
            {exp.description && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {exp.description}
              </Typography>
            )}
            {exp.skills && (
              <Box sx={{ mt: 1 }}>
                {exp.skills.map((skill, i) => (
                  <Typography key={i} variant="body2" component="span" sx={{
                    backgroundColor: 'primary.light',
                    color: 'white',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    mr: 1
                  }}>
                    {skill}
                  </Typography>
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Experience; 