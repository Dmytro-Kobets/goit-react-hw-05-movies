import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/API';

const MovieReviews = () => {
  const id = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getReviews = async () => {
    setReviews(await getMovieReviews(id.movieId));
    setIsLoading(false);
  };
  useEffect(() => {
    getReviews();
  }, []);

  if (isLoading) {
    return <p>aboba</p>;
  }

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
