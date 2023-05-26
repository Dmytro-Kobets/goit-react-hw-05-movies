import { getTranding, searchMovies } from 'services/API';
import { Routes, Route, useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Tranding } from 'pages/Tranding';
import { SearchMovies } from 'pages/SearchMovies';
import { MovieCast } from 'pages/MovieCast';
import { useEffect, useState } from 'react';
import { MovieDetails } from 'pages/MovieDetails';
import { MovieReviews } from 'pages/MovieReviews';

export const App = () => {
  const [tranding, setTranding] = useState([]);

  const [searchHistory, setSearchHistory] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getTrandingMovies();
  }, []);

  const getTrandingMovies = async () => {
    setTranding(await getTranding());
  };

  const handleChange = e => {};

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchHistory(e.currentTarget.elements.input.value);
    navigate(`/movies?searchQuery=${e.currentTarget.elements.input.value}`);
  };

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Tranding tranding={tranding} />} />
        <Route
          path="movies"
          element={
            <SearchMovies
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          }
        ></Route>
        <Route
          path="/movies/:movieId"
          element={<MovieDetails searchHistory={searchHistory} />}
        >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        {/* <Route path="" element={}></Route> */}
      </Route>
    </Routes>
  );
};
