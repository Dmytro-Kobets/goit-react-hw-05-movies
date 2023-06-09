import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/API';
import {
  Container,
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchMovies.styled';
import PropTypes from 'prop-types';

const SearchMovies = ({ handleChange, handleSubmit }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const setMovies = async () => {
    setSearchedMovies(await searchMovies(searchParams.get('searchQuery')));
  };
  useEffect(() => {
    setMovies();
  }, [searchParams.get('searchQuery')]);
  return (
    <Container>
      <SearchForm action="" onSubmit={handleSubmit}>
        <SearchInput name="input" type="search" onChange={handleChange} />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <ul>
        {searchedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: window.location.href }}>
              {movie.title || movie.name}{' '}
              {`(${movie.release_date.slice(0, 4)})`}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

SearchMovies.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
