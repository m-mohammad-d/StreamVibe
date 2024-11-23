import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "3f52b52f9ff0c1560703c65444acd925";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: (type) => `/genre/${type}/list?api_key=${API_KEY}`,
    }),
    getMovies: builder.query({
      query: (type) => `/movie/${type}?api_key=${API_KEY}`,
    }),
    getShows: builder.query({
      query: (type) => `/tv/${type}?api_key=${API_KEY}`,
    }),
    getMediaByGenre: builder.query({
      query: ({ type, genreId }) =>
        `/discover/${type}?api_key=${API_KEY}&with_genres=${genreId}`,
    }),
    getMovieById: builder.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    getShowById: builder.query({
      query: (id) => `/tv/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetShowsQuery,
  useGetMediaByGenreQuery,
  useGetMovieByIdQuery,
  useGetShowByIdQuery,
} = moviesApi;
