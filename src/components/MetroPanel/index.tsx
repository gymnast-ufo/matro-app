import { MetroStations } from '../MetroStations/index.tsx';
import { FC, useState } from 'react';
import { TabPanel } from '../SideBar/TabPanel.tsx';
import { TabsButtons } from '../TabsButtons/index.tsx';

export const MetroPanel: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Станции метро', 'Базовые станции'];

  return (
    <>
      <TabsButtons activeTab={activeTab} tabs={tabs} setActiveTab={setActiveTab} />

      <TabPanel value={activeTab} index={0} id={`station-panel-0`}>
        <MetroStations />
      </TabPanel>

      <TabPanel value={activeTab} index={1} id={`station-panel-1`}>
        <div>Базовые станции</div>
      </TabPanel>
    </>
  );
};
