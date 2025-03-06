import { Box, Typography } from '@mui/material';
import Base from '../components/Base';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { detailRecipe } from '../asyncActions/recipesAsyncActions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClassIcon from '@mui/icons-material/Class';

const DetailedRecipe = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detailRecipe(id));
  }, [dispatch]);

  const { detailedRecipe } = useSelector((state) => state.recipes);

  if (!detailedRecipe) {
    return <Typography>Recipe not found or loading...</Typography>;
  }

  // Préparer les ingrédients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = detailedRecipe[`strIngredient${i}`];
    const measure = detailedRecipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        ingredient,
        measure: measure || '',
      });
    }
  }

  return (
    <Base>
      <Box
        sx={{
          display: 'flex',
          padding: '0 50px 20px',
          minHeight: '100vh',
          gap: '20px',
        }}
      >
        <Box>
          {/* Nom de la recette */}
          <Typography
            sx={{
              fontSize: '3rem',
              fontFamily: 'DM Serif Display, sans-serif',
            }}
          >
            {detailedRecipe.strMeal}
          </Typography>

          {/* Catégorie et Région */}
          <Box
            sx={{
              display: 'flex',
              margin: '10px 0',
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
                {detailedRecipe.strCategory}
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
                {detailedRecipe.strArea}
              </Typography>
            </Box>
          </Box>

          {/* Ingrédients */}
          <Box>
            {ingredients.length === 0 ? (
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                }}
              >
                No ingredients available
              </Typography>
            ) : (
              ingredients.map((item, index) => (
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                  }}
                  key={index}
                >
                  - {item.measure} {item.ingredient}
                </Typography>
              ))
            )}
          </Box>

          {/* Instructions */}
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              marginTop: '10px',
            }}
          >
            {detailedRecipe.strInstructions}
          </Typography>
        </Box>

        {/* Image de la recette */}
        <Box>
          <img
            style={{
              width: '800px',
              height: '500px',
              objectFit: 'cover',
              marginTop: '10px',
            }}
            src={detailedRecipe.strMealThumb}
            alt={detailedRecipe.strMeal}
          />
        </Box>
      </Box>
    </Base>
  );
};

export default DetailedRecipe;
