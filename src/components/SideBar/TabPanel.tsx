import { FC, PropsWithChildren } from 'react';

interface ITabPanel {
  value: number;
  index: number;
  id: string;
}

export const TabPanel: FC<PropsWithChildren<ITabPanel>> = ({ index, id, value, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={index !== value}
      id={id}
    >
      {children}
    </div>
  );
};
