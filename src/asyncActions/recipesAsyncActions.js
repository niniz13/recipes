import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const searchRecipes = createAsyncThunk(
  'recipes/search',
  async (name, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );

      const data = await response.json();

      if (data.meals) {
        return data;
      } else {
        return rejectWithValue('No recipes found');
      }
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);

export const detailRecipe = createAsyncThunk(
  'recipes/detail',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const randomRecipe = createAsyncThunk(
  'recipes/random',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const resetRecipesListErrors = createAction(
  'recipes/resetRecipesListErrors'
);
