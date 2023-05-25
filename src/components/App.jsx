import { getTranding, searchMovies } from 'services/API';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Tranding } from 'pages/Tranding';
import { SearchMovies } from 'pages/SearchMovies';
import { SearchHits } from 'pages/SearchHits';
import { useEffect, useState } from 'react';

export const App = () => {
  const [tranding, setTranding] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    getTrandingMovies();
  }, []);

  const getTrandingMovies = async () => {
    setTranding(await getTranding());
  };

  const handleChange = e => {
    setSearchParams({
      searchQuery: e.currentTarget.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setSearchedMovies(await searchMovies(searchParams.get('searchQuery')));
    console.log(searchedMovies);
  };

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Tranding tranding={tranding} />} />
        <Route
          path="movies"
          element={
            <div>
              <SearchMovies
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
              <SearchHits movies={searchedMovies} />
            </div>
          }
        ></Route>
        {/* <Route path="" element={}></Route> */}
      </Route>
    </Routes>
  );
};
