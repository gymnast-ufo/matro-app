import { FC, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { IMetroCity, IMetroLine } from '../../types';
import { StationsLine } from './StationsLine.tsx';
import { inject, observer } from 'mobx-react';

type IStationList = {
  cities: IMetroCity[];
};

const citiesFiltering = (cities: IMetroCity[], search: string): IMetroCity[] => {
  return cities.reduce((cityArray, city) => {
    if (!city.lines?.length) return cityArray;
    if (!search) {
      cityArray.push(city);
      return cityArray;
    }

    const lines = city.lines.reduce((lineArray, line) => {
      const stations = line.stations.filter((station) => station.includes(search));
      if (!stations.length) return lineArray;

      const filteredLine = { ...line, stations };
      lineArray.push(filteredLine);

      return lineArray;
    }, [] as IMetroLine[]);

    if (!lines.length) return cityArray;

    const filteredCity = { ...city, lines };
    cityArray.push(filteredCity);

    return cityArray;
  }, [] as IMetroCity[]);
};

export const StationList: FC<IStationList> = inject(stores => stores)(
  observer(({ cities, metroStore }) => {
    if (!cities.length) return;

    const { search } = metroStore;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true);
    const handleClick = () => setOpen(!open);

    const filteredCities = citiesFiltering(cities, search);

    if (!filteredCities.length) return (
      <div className="default-paddings-x default-paddings-y">Ничего не найдено</div>
    );

    const citiesList = filteredCities.map((city) => (
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
  })
);
