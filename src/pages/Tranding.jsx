import { Link } from 'react-router-dom';

export const Tranding = ({ tranding }) => {
  return (
    <ul>
      {tranding.map(trandingMovie => (
        <li key={trandingMovie.id}>
          <Link>{trandingMovie.title || trandingMovie.name}</Link>
        </li>
      ))}
    </ul>
  );
};