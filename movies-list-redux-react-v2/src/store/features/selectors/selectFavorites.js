import { createSelector } from "@reduxjs/toolkit";

const selectorFn = (state) => state.favorito.movies;
export const selectFavorites = createSelector([selectorFn], (state) => state);
