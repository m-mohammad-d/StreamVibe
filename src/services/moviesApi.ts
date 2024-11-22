import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "7d389035";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMoviesByGenre: builder.query({
      query: (genre) => `?apikey=${API_KEY}&s=${genre}&type=movie&page=1&y=2023`,
    }),
    getShowsByGenre: builder.query({
      query: (genre) => `?apikey=${API_KEY}&s=${genre}&type=series&page=1&y=2023`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `?apikey=${API_KEY}&i=${id}`,
    }),
  }),
});

export const {
  useGetMoviesByGenreQuery,
  useGetShowsByGenreQuery,
  useGetMovieDetailsQuery,
} = moviesApi;
