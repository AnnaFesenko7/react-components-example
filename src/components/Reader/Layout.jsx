import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <hr />
      <ul>
        <li>
          <Link to={'reader'}>Reader</Link>
        </li>
        <li>
          <Link to={'create'}>Create</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
