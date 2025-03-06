import { createSlice } from '@reduxjs/toolkit';
import {
  searchRecipes,
  detailRecipe,
  randomRecipe,
} from '../asyncActions/recipesAsyncActions';

const groupsSlice = createSlice({
  name: 'groupsSlice',
  initialState: {
    recipes: null,
    recipesCount: 0,
    recipesIsError: false,
    recipesError: '',

    detailedRecipe: null,
    detailedRecipeIsError: false,
    detailedRecipeError: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // --------- SEARCH FOR RECIPES ----------
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.groupsIsLoading = false;
        if ('results' in action.payload) {
          state.recipesCount = action.payload.count;
          state.recipes = action.payload.results;
        } else {
          state.recipes = action.payload;
          state.recipesCount = action.payload.length;
        }
      })
      .addCase(searchRecipes.pending, (state) => {
        state.recipesIsError = false;
        state.recipesError = '';
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.recipesIsError = true;
        if (action.payload.data.message)
          state.recipesError = action.payload.data.message;
        else if (action.payload.data) state.recipesError = action.payload.data;
      })

      // --------- GET A RECIPE ----------
      .addCase(detailRecipe.fulfilled, (state, action) => {
        state.detailedRecipe = action.payload?.meals?.[0];
      })
      .addCase(detailRecipe.pending, (state) => {
        state.detailedRecipeIsError = false;
        state.detailedRecipeError = '';
      })
      .addCase(detailRecipe.rejected, (state, action) => {
        state.detailedRecipeIsError = true;
        if (action.payload?.data?.message)
          state.detailedRecipeError = action.payload.data.message;
        else if (action.payload.data)
          state.detailedRecipeError = action.payload.data;
      })

      // --------- GET A RANDOM RECIPE ----------
      .addCase(randomRecipe.fulfilled, (state, action) => {
        state.detailedRecipe = action.payload?.meals?.[0];
      })
      .addCase(randomRecipe.pending, (state) => {
        state.detailedRecipeIsError = false;
        state.detailedRecipeError = '';
      })
      .addCase(randomRecipe.rejected, (state, action) => {
        state.detailedRecipeIsError = true;
        if (action.payload?.data?.message)
          state.detailedRecipeError = action.payload.data.message;
        else if (action.payload.data)
          state.detailedRecipeError = action.payload.data;
      });
  },
});
export default groupsSlice.reducer;
