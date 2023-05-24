import { Outlet } from 'react-router-dom';

export const SearchMovies = ({ searchQuery, handleChange, handleSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input value={searchQuery} type="search" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </div>
  );
};
