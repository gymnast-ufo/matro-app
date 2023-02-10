import { childrenRoutes } from '../../routes/index.tsx';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

export const Menu = () => {
  const menuList = useMemo(() => {
    return childrenRoutes.map((route, index) => (
      <li key={index}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ));
  }, []);

  return (
    <ul>{menuList}</ul>
  );
};
