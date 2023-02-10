import './index.scss';
import { FC, useState } from 'react';
import { MetroStations } from '../MetroStations/index.tsx';
import { Tab, Tabs } from '@mui/material';
import { TabPanel } from './TabPanel.tsx';

export const SideBar: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (value) => setActiveTab(value);

  return (
    <div className="sidebar reports-sidebar right-border">
      <Tabs value={activeTab} onChange={handleChange} className="sidebar__element bottom-border default-paddings">
        <Tab value={0} label="Метро"/>

        <Tab value={1} label="Список утройств"/>
      </Tabs>

      <TabPanel value={activeTab} index={0} id={`type-panel-0`}>
        <div className="sidebar__element bottom-border default-paddings">
          <div>Станции метро</div>

          <div>Базовые станции</div>
        </div>

        <MetroStations />
      </TabPanel>

      <TabPanel value={activeTab} index={1} id={`type-panel-1`}>
        <div className="sidebar__element bottom-border default-paddings">
          Список устройств
        </div>
      </TabPanel>
    </div>
  );
};
