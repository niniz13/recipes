import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './screens/Home';
import Recipes from './screens/Recipes';
import DetailedRecipe from './screens/DetailedRecipe';
import RandomRecipe from './screens/RandomRecipe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search/recipes/:name',
    element: <Recipes />,
  },
  {
    path: '/recipe/:id',
    element: <DetailedRecipe />,
  },
  {
    path: '/random/recipe',
    element: <RandomRecipe />,
  },
]);

export default router;
