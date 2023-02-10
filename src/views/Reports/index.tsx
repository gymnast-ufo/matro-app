import './index.scss';
import { FC } from 'react';
import { SideBar } from '../../components/SideBar/index.tsx';
import { Metrics } from '../../components/Metrics/index.tsx';

export const Reports: FC = () => {
  return (
    <div className="sidebar-page">
      <SideBar />

      <Metrics />
    </div>
  );
};