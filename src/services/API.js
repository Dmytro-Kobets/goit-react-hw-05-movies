import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRhZDM3MWFmMDZmNmU4NGFlMmVjMmU3MzIwY2E3OSIsInN1YiI6IjY0NmRmZjA3OTY2MWZjMDE1NzM2YmEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.166xz9Gnh5WkgFiVqzrf_uvLzBLhVmAfhg3jxVXraug';

const popularOtions = {
  baseURL: 'https://api.themoviedb.org/3/trending/all/day',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
};

export const getTranding = async () => {
  const tranding = (await axios.get('', popularOtions)).data.results;

  return tranding;
};

export const searchMovies = async searchQuery => {
  const searchOptions = {
    baseURL: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: searchQuery,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: { accept: 'application/json', Authorization: API_KEY },
  };
  const hits = (await axios.get('', searchOptions)).data.results;
  return hits;
};
