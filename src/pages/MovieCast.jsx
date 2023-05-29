import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';

const MovieCast = () => {
  const id = useParams();
  const [cast, setCast] = useState(null);
  const getCast = async () => {
    setCast(await getMovieCredits(id.movieId));
  };
  useEffect(() => {
    getCast();
  }, []);
  return (
    <div>
      <ul>
        {cast
          ? cast.map(castMember => (
              <li key={castMember.id}>
                {castMember.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`}
                    alt="Actor"
                    width="100px"
                  ></img>
                ) : (
                  <p>There is no photo for this actor</p>
                )}
                <p>{castMember.name}</p>
                <p>Character: {castMember.character}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default MovieCast;
