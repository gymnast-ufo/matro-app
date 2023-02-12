import './index.scss';

import { FC } from 'react';
import { Menu } from './Menu.tsx';

export const Header: FC = () => {
  return (
    <header className="header bottom-border default-paddings-x">
      <div className="header__logo">Logo</div>

      <Menu />

      <div className="header__account"></div>
    </header>
  );
};