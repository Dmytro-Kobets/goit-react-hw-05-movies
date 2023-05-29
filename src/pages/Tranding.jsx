import { Link } from 'react-router-dom';

const Tranding = ({ tranding }) => {
  return (
    <ul>
      {tranding.map(trandingMovie => (
        <li key={trandingMovie.id}>
          <Link
            to={`/movies/${trandingMovie.id}`}
            state={{ from: window.location.href }}
          >
            {trandingMovie.title || trandingMovie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tranding;
