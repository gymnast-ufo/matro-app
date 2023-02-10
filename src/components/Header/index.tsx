import './index.scss';

import { Menu } from './Menu.tsx';

export const Header = () => {
  return (
    <header className="header">
      <div>Logo</div>

      <Menu />
    </header>
  );
};