import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchRecipes } from "../utils/recipeUtils";

const recipesAdapter = createEntityAdapter({});

const initialState = recipesAdapter.getInitialState({
  error: null,
  status: STATUS.IDLE,
  nextPage: null,
  searchResult: null,
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // handling fetching of all recipes
      .addCase(fetchRecipes.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.nextPage = action.payload.nextPage;
        recipesAdapter.upsertMany(state, action.payload.data);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectAllRecipes } = recipesAdapter.getSelectors(
  (state) => state.recipes
);

export const getRecipesStatus = (state) => state.recipes.status;
export const getRecipesError = (state) => state.recipes.error;

export default recipesSlice.reducer;