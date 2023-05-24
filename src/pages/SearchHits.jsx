import { Link } from 'react-router-dom';

export const SearchHits = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li>
          <Link>{movie.title || movie.name}</Link>
        </li>
      ))}
    </ul>
  );
};
