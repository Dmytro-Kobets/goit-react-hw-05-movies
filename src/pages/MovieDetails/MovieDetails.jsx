import { useParams, Outlet, useLocation } from 'react-router-dom';
import { searchMoviesById } from '../../services/API';
import { useEffect, useState, useRef, Suspense } from 'react';
import {
  Container,
  GoBackLink,
  MainContentContainer,
  LinkContainer,
  AdditionalLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const id = useParams();
  const { state } = useLocation();
  const fromRef = useRef(null);
  const [movieDetails, setMovieDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const details = async () => {
    try {
      const data = await searchMoviesById(id.movieId);
      setMovieDetails(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fromRef.current = state?.from;

    details();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <GoBackLink to={fromRef.current}>← Go back</GoBackLink>
        <p>Loading...</p>
      </Container>
    );
  }

  if (!movieDetails) {
    return (
      <Container>
        <GoBackLink to={fromRef.current}>← Go back</GoBackLink>
        <h2>Movie not found</h2>
      </Container>
    );
  }
  const {
    poster_path: poster,
    original_title: title,
    vote_average: userScore,
    overview,
    genres,
  } = movieDetails;
  return (
    <Container>
      <GoBackLink to={fromRef.current}>← Go back</GoBackLink>
      <MainContentContainer>
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
      </MainContentContainer>
      <LinkContainer>
        <p>Additional information</p>
        <ul>
          <li>
            <AdditionalLink to="cast">Cast</AdditionalLink>
          </li>
          <li>
            <AdditionalLink to="reviews">Reviews</AdditionalLink>
          </li>
        </ul>
      </LinkContainer>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
