import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/API';

export const MovieReviews = () => {
  const id = useParams();
  const [reviews, setReviews] = useState(null);

  const getReviews = async () => {
    setReviews(await getMovieReviews(id.movieId));
  };
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <ul>
        {reviews ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>There is no reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
