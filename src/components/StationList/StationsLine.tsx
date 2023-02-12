import { FC, useMemo, useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { IMetroLine } from '../../types';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface IStationsLine {
  line: IMetroLine;
}

export const StationsLine: FC<IStationsLine> = ({ line }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);

  const stations = useMemo(() => {
    return line.stations.map((station, index) => (
      <ListItemButton key={index}>
        <ListItemText primary={station} />
      </ListItemButton>
    ));
  }, [line.stations]);

  return (
    <List component="ul" sx={{ pl: 4 }}>
      <ListItemButton onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText primary={line.line} />
      </ListItemButton>

      <Collapse in={open}>
        <List component="ul" sx={{ pl: 4 }}>
          {stations}
        </List>
      </Collapse>
    </List>
  );
};
