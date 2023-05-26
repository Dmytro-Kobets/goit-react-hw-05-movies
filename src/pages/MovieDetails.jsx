import { useParams, Link, Outlet } from 'react-router-dom';
import { searchMoviesById } from '../services/API';
import { useEffect, useState } from 'react';

export const MovieDetails = ({ searchHistory }) => {
  const id = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const details = async () => {
    setMovieDetails(await searchMoviesById(id.movieId));
  };

  useEffect(() => {
    details();
  }, []);

  if (movieDetails === null) {
    return null;
  }
  const {
    poster_path: poster,
    original_title: title,
    vote_average: userScore,
    overview,
    genres,
  } = movieDetails;
  return (
    <div>
      <Link to={`/movies?searchQuery=${searchHistory}`}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt=""
          width="300px"
        />
        <div>
          <h1>{title}</h1>
          <p>User Score: {userScore.toFixed(2)}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
