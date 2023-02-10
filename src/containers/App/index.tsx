import './index.scss';
import { Outlet } from 'react-router';
import { Header } from '../../components/Header/index.tsx';

export const App = () => {
  return (
    <main className="main">
      <Header />
      <Outlet />
    </main>
  );
};
