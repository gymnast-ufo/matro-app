import './index.scss';
import { FC, useState } from 'react';
import { TabPanel } from './TabPanel.tsx';
import { MetroPanel } from '../MetroPanel/index.tsx';
import { TabsButtons } from '../TabsButtons/index.tsx';

export const SideBar: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Метро', 'Список утройств'];

  return (
    <div className="sidebar reports-sidebar right-border">
      <TabsButtons activeTab={activeTab} tabs={tabs} setActiveTab={setActiveTab} />

      <TabPanel value={activeTab} index={0} id={`type-panel-0`}>
        <MetroPanel />
      </TabPanel>

      <TabPanel value={activeTab} index={1} id={`type-panel-1`}>
        <div className="sidebar__element bottom-border default-paddings-x">
          Список устройств
        </div>
      </TabPanel>
    </div>
  );
};
