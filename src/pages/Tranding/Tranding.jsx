import { Link } from 'react-router-dom';
import { Container } from './Tranding.styled';
import { PropTypes, object } from 'prop-types';

const Tranding = ({ tranding }) => {
  return (
    <Container>
      <h1>Tranding today</h1>
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
    </Container>
  );
};

Tranding.propTypes = {
  tranding: PropTypes.arrayOf(object).isRequired,
};

export default Tranding;
