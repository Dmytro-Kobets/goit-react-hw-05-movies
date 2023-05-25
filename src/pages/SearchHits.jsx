import { Link } from 'react-router-dom';

export const SearchHits = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link>
            {movie.title || movie.name} {`(${movie.release_date.slice(0, 4)})`}
          </Link>
        </li>
      ))}
    </ul>
  );
};
