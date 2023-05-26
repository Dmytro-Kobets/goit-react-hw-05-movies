import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRhZDM3MWFmMDZmNmU4NGFlMmVjMmU3MzIwY2E3OSIsInN1YiI6IjY0NmRmZjA3OTY2MWZjMDE1NzM2YmEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.166xz9Gnh5WkgFiVqzrf_uvLzBLhVmAfhg3jxVXraug';

const options = {
  baseURL: 'https://api.themoviedb.org/3/trending/all/day',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
};

export const getTranding = async () => {
  const tranding = (await axios.get('', options)).data.results;

  return tranding;
};

export const searchMovies = async searchQuery => {
  const options = {
    baseURL: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: searchQuery,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: { accept: 'application/json', Authorization: API_KEY },
  };
  const hits = (await axios.get('', options)).data.results;
  return hits;
};

export const searchMoviesById = async movieId => {
  const options = {
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: {
      language: 'en-US',
    },
    headers: { accept: 'application/json', Authorization: API_KEY },
  };
  const details = (await axios.get('', options)).data;

  return details;
};

export const getMovieCredits = async movieId => {
  const options = {
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    params: {
      language: 'en-US',
    },
    headers: { accept: 'application/json', Authorization: API_KEY },
  };
  const credits = (await axios.get('', options)).data.cast;

  return credits;
};

export const getMovieReviews = async movieId => {
  const options = {
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    params: {
      language: 'en-US',
    },
    headers: { accept: 'application/json', Authorization: API_KEY },
  };
  const reviews = (await axios.get('', options)).data.results;

  return reviews;
};
