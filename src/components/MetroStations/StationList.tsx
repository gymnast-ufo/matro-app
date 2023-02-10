import { FC } from 'react';
import { IMetroCity } from '../../types';

type IStationList = {
  cities: IMetroCity[];
};

export const StationList: FC<IStationList> = ({ cities }) => {
  if (!cities.length) {
    return null;
  }

  const citiesList = cities.reduce((arr, city) => {
    if (!city.lines?.length) return arr;

    const cityObject = '';

    arr.push(cityObject);
    return arr;
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};