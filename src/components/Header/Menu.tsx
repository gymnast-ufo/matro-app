import { childrenRoutes } from '../../routes/index.tsx';
import { Link } from 'react-router-dom';
import { FC, useMemo } from 'react';

export const Menu: FC = () => {
  const menuList = useMemo(() => {
    return childrenRoutes.map((route, index) => (
      <li key={index} className="menu__item">
        <Link to={route.path}>{route.name}</Link>
      </li>
    ));
  }, []);

  return (
    <ul className="header__menu menu">{menuList}</ul>
  );
};
