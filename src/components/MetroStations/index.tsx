import { FC, useEffect, useState } from 'react';
import { Search } from './Search.tsx';
import { StationList } from './StationList.tsx';
import { metroAPI } from '../../api/Metro.ts';
import { IMetroCity, IMetroLine } from '../../types';

export const MetroStations: FC = () => {
  const [moscowLines, setMoscowLines] = useState([] as IMetroLine[]);

  const getMoscowLines = async () => {
    try {
      const lines = await metroAPI.getAlternative();
      console.log(lines);
      setMoscowLines(lines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoscowLines();
  }, []);

  const cities: IMetroCity[] = [
    { id: 1, name: 'Москва и Московская область', lines: moscowLines },
    { id: 2, name: 'Санкт-Петербуг' },
  ];

  return (
    <div>
      <Search />

      <StationList cities={cities} />
    </div>
  );
};