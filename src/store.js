import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recipesSlice from './slices/recipesSlices';

const rootReducer = combineReducers({
  recipes: recipesSlice,
});
const store = configureStore({ reducer: rootReducer });
export default store;
