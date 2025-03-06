import { Box, Button, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClassIcon from '@mui/icons-material/Class';
import { useNavigate } from 'react-router-dom';
import { Opacity } from '@mui/icons-material';

const RecipeComponent = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: '10px',
      }}
    >
      <Box
        component='img'
        sx={{
          width: '30vw',
          cursor: 'pointer',
          transition: '0.3s',
          '&:hover': {
            opacity: '0.5',
          },
        }}
        alt='recipe-image'
        src={recipe.strMealThumb}
        onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <Box sx={{ color: '#a76e63', display: 'flex' }}>
          <ClassIcon />
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: ' 0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            {recipe.strCategory}
          </Typography>
        </Box>
        <Box sx={{ color: '#a76e63', display: 'flex' }}>
          <LocationOnIcon />
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: ' 0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            {recipe.strArea}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
          color: '#000',
        }}
      >
        <Button onClick={() => navigate(`/recipe/${recipe.idMeal}`)}>
          View Recipe
        </Button>
      </Box>
    </Box>
  );
};

export default RecipeComponent;
