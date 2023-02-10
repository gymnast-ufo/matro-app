import { insideAPI } from './index.ts';
import { AxiosResponse } from 'axios';
import { IMetroLine } from '../types';

export const metroAPI = {
  getMoscowLines: (): Promise<AxiosResponse<Array<IMetroLine>>> => insideAPI.get('/stations.json'),
};
