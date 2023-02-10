import './index.scss';
import { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../components/Header/index.tsx';

export const App: FC = () => {
  return (
    <main className="main">
      <Header />
      <Outlet />
    </main>
  );
};
