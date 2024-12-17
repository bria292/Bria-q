import { Container, Typography, Card, CardContent, Box, Chip, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

function Experience() {
  const experiences = [
    {
      company: "Capital One",
      role: "Software Engineer",
      type: "Full-time",
      duration: "Feb 2023 - Present · 1 yr 11 mos",
      location: "McLean, Virginia, United States",
      skills: ["PostgreSQL", "JavaScript", "React.js", "Node.js", "AWS"],
      logo: "/company-logos/capital-one.png"
    },
    {
      company: "Accenture Federal Services",
      role: "Senior Business and Technology Analyst",
      type: "Full-time",
      duration: "Nov 2020 - Jan 2023 · 2 yrs 3 mos",
      location: "Washington DC",
      description: [
        "Identify and define detailed product requirements and use cases",
        "Participate in user and task analysis",
        "Develop product requirements based on input gathered from a variety of sources including analysis results and feedback from user community",
        "Analyze and design business processes for federal clients",
        "Wrote regression and smoke test automation scripts in java using Selenium and also Cucumber and Serenity"
      ],
      logo: "/company-logos/accenture.png"
    },
    {
      company: "Accenture Federal Services",
      role: "Business & Technology Analyst",
      type: "Full-time",
      duration: "Sep 2019 - Nov 2020 · 1 yr 3 mos",
      location: "Washington DC",
      logo: "/company-logos/accenture.png"
    },
    {
      company: "CGI",
      role: "Business Analyst",
      type: "Full-time",
      duration: "Sep 2018 - Nov 2020 · 1 yr 3 mos",
      location: "Fairfax, VA",
      description: [
        "Helped ensure hundreds of security principals, in multiple sandbox environments, were given the correct and necessary permissions in the ERP system",
        "Participate in many stakeholder discussions to understand context, validate challenges, solicit feedback and gather requirements on acceptable future-state solutions",
        "Execute many test scripts to confirm ERP system is functioning properly"
      ],
      logo: "/company-logos/cgi.png"
    },
    {
      company: "Ingersoll Rand",
      role: "IT Engineer Intern",
      type: "Internship",
      duration: "May 2017 - Aug 2017 · 4 mos",
      location: "Minneapolis, Minnesota",
      description: [
        "Used Selenium on Eclipse to automate multiple business workflow processes",
        "Used Oracle UPK software to create training material for over 8,000 engineers using Windchill",
        "Filtered and Associated over 1200 rows of data on excel for users in active directory",
        "Communicated business plans and progress reports with workers internationally in Chennai, India and in local office"
      ],
      logo: "/company-logos/ingersoll-rand.png"
    }
  ];

  const languages = [
    {
      language: "English",
      proficiency: "Native or bilingual proficiency"
    },
    {
      language: "Kurdish",
      proficiency: "Native or bilingual proficiency"
    },
    {
      language: "Arabic",
      proficiency: "Elementary proficiency"
    },
    {
      language: "Spanish",
      proficiency: "Limited working proficiency"
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        mb: 4 
      }}>
        <WorkIcon fontSize="large" />
        Professional Experience
      </Typography>

      {experiences.map((exp, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              {exp.logo && (
                <Box
                  component="img"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  sx={{ width: 48, height: 48, objectFit: 'contain' }}
                />
              )}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" component="h3">
                  {exp.role}
                </Typography>
                <Typography color="primary" gutterBottom>
                  {exp.company} · {exp.type}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {exp.duration}
                </Typography>
                <Typography color="text.secondary" sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  mb: 2 
                }}>
                  <LocationOnIcon fontSize="small" />
                  {exp.location}
                </Typography>

                {exp.skills && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {exp.skills.map((skill, i) => (
                      <Chip 
                        key={i} 
                        label={skill} 
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                )}

                {exp.description && (
                  <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    {exp.description.map((item, i) => (
                      <Typography key={i} component="li" variant="body2" sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2 
        }}>
          <LanguageIcon />
          Languages
        </Typography>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {languages.map((lang, index) => (
                <Box key={index}>
                  {index > 0 && <Divider sx={{ my: 2 }} />}
                  <Typography variant="h6" component="h4">
                    {lang.language}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {lang.proficiency}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Experience; 