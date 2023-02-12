import { FC, SyntheticEvent, useMemo } from 'react';
import { Tab, Tabs } from '@mui/material';

interface ITabsButtons {
  tabs: string[];
  activeTab: number;
  setActiveTab: (value: number) => void;
}

export const TabsButtons: FC<ITabsButtons> = ({ tabs, activeTab, setActiveTab }) => {
  if (!tabs?.length) return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const tabsList = useMemo(() => {
    return tabs.map((tab, index) => (
      <Tab key={`${tab}-${index}`} value={index} label={tab} />
    ));
  }, [tabs]);

  const handleChange = (event: SyntheticEvent, value: number) => setActiveTab(value);

  return (
    <Tabs value={activeTab} onChange={handleChange} className="sidebar__element bottom-border default-paddings-x">
      {tabsList}
    </Tabs>
  );
};