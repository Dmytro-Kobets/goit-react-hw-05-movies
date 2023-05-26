import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/API';

export const SearchMovies = ({ searchQuery, handleChange, handleSubmit }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const setMovies = async () => {
    setSearchedMovies(await searchMovies(searchParams.get('searchQuery')));
  };
  useEffect(() => {
    setMovies();
  }, [searchParams.get('searchQuery')]);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={searchQuery}
          name="input"
          type="search"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>
              {movie.title || movie.name}{' '}
              {`(${movie.release_date.slice(0, 4)})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
