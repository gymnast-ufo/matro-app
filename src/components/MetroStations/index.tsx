import { FC, useEffect, useState } from 'react';
import { Search } from './Search.tsx';
import { StationList } from '../StationList/index.tsx';
import { IGetMoscowLineResponse, metroAPI } from '../../api/Metro.ts';
import { IMetroCity, IMetroLine } from '../../types';

export const MetroStations: FC = () => {
  const [moscowLines, setMoscowLines] = useState([] as IMetroLine[]);

  const getMoscowLines = async () => {
    try {
      const response: IGetMoscowLineResponse = await metroAPI.getMoscowLines();
      setMoscowLines(response.lines);
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
    <div className="default-paddings-y">
      <Search />

      <StationList cities={cities} />
    </div>
  );
};