import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';

// Styled components for Windows XP look
const WindowsXPWindow = styled(Paper)(({ theme }) => ({
  width: '90%',
  maxWidth: 800,
  margin: '20px auto',
  borderRadius: '8px 8px 0 0',
  overflow: 'hidden',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
  border: '1px solid #0054E3',
}));

const TitleBar = styled(Box)({
  background: 'linear-gradient(to bottom, #2A7FFF 0%, #0066FF 45%, #0052CC 46%, #0066FF 100%)',
  padding: '4px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'white',
  fontFamily: 'Tahoma, sans-serif',
});

const WindowControls = styled(Box)({
  display: 'flex',
  gap: '4px',
  '& .MuiSvgIcon-root': {
    fontSize: '18px',
    padding: '2px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  },
});

const ContentArea = styled(Box)({
  backgroundColor: '#fff',
  padding: '20px',
  fontFamily: 'Tahoma, sans-serif',
  height: '70vh',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '16px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#c1c1c1',
    borderRadius: '8px',
    border: '2px solid #f1f1f1',
  },
});

const HistorySection = styled(Box)({
  marginBottom: '20px',
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    margin: '20px 0',
    border: '1px solid #ddd',
    padding: '4px',
    backgroundColor: '#fff',
  },
});

function Throwback() {
  const historyContent = [
    {
      title: "Ancient Origins",
      content: "Kurdistan has a rich history dating back to ancient civilizations. The region has been home to various empires and kingdoms throughout history, including the Medes, who are considered ancestors of modern Kurds."
    },
    {
      title: "Geography and Culture",
      content: "Kurdistan spans across parts of Turkey, Syria, Iraq, and Iran. The region is known for its mountainous terrain, which has played a crucial role in preserving Kurdish culture and identity throughout history."
    },
    {
      title: "Language and Heritage",
      content: "The Kurdish language belongs to the Iranian branch of Indo-European languages. Kurdish culture is rich in oral traditions, music, and literature, with a strong emphasis on poetry and storytelling."
    },
    {
      title: "Modern Era",
      content: "Following World War I and the collapse of the Ottoman Empire, the Treaty of Sèvres (1920) initially promised Kurdish independence. However, the later Treaty of Lausanne (1923) left Kurds without a nation-state, leading to ongoing aspirations for self-determination."
    },
    {
      title: "Cultural Significance",
      content: "Kurdish culture is known for its vibrant celebrations, including Newroz (New Year), traditional clothing, and rich culinary traditions. The Kurdish people have maintained their distinct cultural identity despite centuries of challenges."
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#ECE9D8',
      backgroundImage: 'url(/windows-xp-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      py: 4
    }}>
      <WindowsXPWindow>
        <TitleBar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img 
              src="/kurdistan-icon.png" 
              alt="Kurdistan"
              style={{ width: '16px', height: '16px' }}
            />
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              Kurdistan History - Notepad
            </Typography>
          </Box>
          <WindowControls>
            <MinimizeIcon />
            <CropSquareIcon />
            <CloseIcon />
          </WindowControls>
        </TitleBar>
        <ContentArea>
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontFamily: 'Tahoma',
              color: '#003399',
              borderBottom: '1px solid #ccc',
              pb: 1
            }}
          >
            History of Kurdistan
          </Typography>
          
          {historyContent.map((section, index) => (
            <HistorySection key={index}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontFamily: 'Tahoma',
                  color: '#003399',
                  fontWeight: 'bold'
                }}
              >
                {section.title}
              </Typography>
              <Typography 
                paragraph
                sx={{ 
                  fontFamily: 'Tahoma',
                  fontSize: '14px',
                  lineHeight: 1.6
                }}
              >
                {section.content}
              </Typography>
            </HistorySection>
          ))}
        </ContentArea>
      </WindowsXPWindow>
    </Box>
  );
}

export default Throwback; 