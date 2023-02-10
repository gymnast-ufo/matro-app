import './index.scss';
import { SideBar } from '../../components/SideBar/index.tsx';
import { Metrics } from '../../components/Metrics/index.tsx';

export const Reports = () => {
  return (
    <div className="page">
      <SideBar />

      <Metrics />
    </div>
  );
};