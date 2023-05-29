import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { searchMoviesById } from '../services/API';
import { useEffect, useState, useRef, Suspence } from 'react';

const MovieDetails = () => {
  const id = useParams();
  const { state } = useLocation();
  const fromRef = useRef(null);
  const [movieDetails, setMovieDetails] = useState(null);

  const details = async () => {
    setMovieDetails(await searchMoviesById(id.movieId));
  };

  useEffect(() => {
    // fromRef.current = state.from;
    details();
  }, []);

  if (movieDetails === null) {
    return <p>aboba</p>;
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
      {/* <Link to={fromRef.current}>Go back</Link> */}
      <div>
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500/${poster}`
              : 'https://placehold.co/300x450'
          }
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
      <Suspence>
        <Outlet />
      </Suspence>
    </div>
  );
};

export default MovieDetails;
