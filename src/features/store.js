import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice/movieSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
