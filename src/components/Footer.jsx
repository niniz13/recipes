import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100px',
        backgroundColor: '#23262e;',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/random/recipe')}
      >
        Random Meal
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        Area
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        Category
      </Typography>
    </Box>
  );
};

export default Footer;
