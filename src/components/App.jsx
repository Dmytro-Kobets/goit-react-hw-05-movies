import { getTranding, searchMovies } from 'services/API';
import { Routes, Route, useSearchParams, useNavigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { useEffect, useState, lazy } from 'react';

const Tranding = lazy(() => import('pages/Tranding'));
const SearchMovies = lazy(() => import('pages/SearchMovies'));
const MovieCast = lazy(() => import('pages/MovieCast'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieReviews = lazy(() => import('pages/MovieReviews'));

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
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Tranding tranding={tranding} />} />
        <Route
          path="movies"
          element={
            <SearchMovies
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          }
        />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
