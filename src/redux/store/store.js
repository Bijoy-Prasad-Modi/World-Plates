import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipesSlice";

const rootReducer = {
  recipes: recipesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
