import { insideAPI } from './index.ts';
import { AxiosResponse } from 'axios';
import { IMetroLine } from '../types';

export interface IGetMoscowLineResponse {
  lines: IMetroLine[];
}

export const metroAPI = {
  getMoscowLines: (): Promise<AxiosResponse<IGetMoscowLineResponse>> => insideAPI.get('/stations.json'),
};
