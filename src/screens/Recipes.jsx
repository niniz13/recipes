import { Box, Typography } from '@mui/material';
import RecipeComponent from '../components/RecipeComponent';
import Base from '../components/Base';
import { useEffect } from 'react';
import { searchRecipes } from '../asyncActions/recipesAsyncActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Recipes = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(searchRecipes(name));
    }
  }, [name, dispatch]);

  const { recipes, recipesIsError, recipesError } = useSelector(
    (state) => state.recipes
  );

  // Vérification d'erreur ou de chargement
  if (recipesIsError) {
    return <Typography>{recipesError || 'Failed to load recipes'}</Typography>;
  }

  if (!recipes) {
    return <Typography>Recipe not found or loading...</Typography>;
  }

  return (
    <Base>
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {recipes.meals && recipes.meals.length > 0 ? (
          recipes.meals.map((recipe) => (
            <RecipeComponent key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <Typography>No recipes found</Typography>
        )}
      </Box>
    </Base>
  );
};

export default Recipes;
