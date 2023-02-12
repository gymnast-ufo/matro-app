import { FC, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { IMetroCity } from '../../types';
import { StationsLine } from './StationsLine.tsx';

type IStationList = {
  cities: IMetroCity[];
};

export const StationList: FC<IStationList> = ({ cities }) => {
  if (!cities.length) return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);

  const citiesList = cities
    .filter((city) => city.lines?.length)
    .map((city) => (
      <List key={city.id} component="ul">
        <ListItemButton onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary={city.name} />
        </ListItemButton>

        {city.lines.map((line, index) => <StationsLine key={index} line={line} />)}
      </List>
    ));

  return (
    <div style={{ maxHeight: '100%', overflow: 'auto' }}>
      {citiesList}
    </div>
  );
};