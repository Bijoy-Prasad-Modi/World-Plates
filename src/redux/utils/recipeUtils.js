import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../../api/axios";
import { extractRecipeData } from "../../utils/helpers";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (queryText = "chicken") => {
    try {
      // searching chicken recipes by default
      const { data } = await fetchData(
        `?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${
          import.meta.env.VITE_APP_KEY
        }&q=${queryText}`
      );
      let recipesData = extractRecipeData(data);
      return recipesData;
    } catch (error) {
      throw Error("Failed to fetch recipes.");
    }
  }
);

export const fetchSearchRecipe = createAsyncThunk(
  "recipes/fetchSearchRecipes",
  async ({ queryText, nextPageLink }) => {
    try {
      let recipesData = null;

      if (!nextPageLink) {
        const { data } = await fetchData(
          `?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&q=${queryText}`
        );
        recipesData = extractRecipeData(data);
        recipesData;
      } else {
        const { data } = await fetchData(`${nextPageLink}`);
        recipesData = extractRecipeData(data);
      }

      return recipesData;
    } catch (error) {
      throw Error("Failed to search recipes.");
    }
  }
);