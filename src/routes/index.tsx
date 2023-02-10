import { RouteObject } from 'react-router';
import { App } from '../containers/App/index.tsx';
import { Reports } from '../views/Reports/index.tsx';
import { Analysis } from '../views/Analysis/index.tsx';

type NamedRouteObject = RouteObject & {
  name?: string;
};

export const childrenRoutes: NamedRouteObject[] = [
  { path: '/', element: <Reports />, name: 'Отчёты' },
  { path: '/analysis', element: <Analysis />, name: 'Анализ' },
];

export const routes: RouteObject[] = [
  { path: '/', element: <App />, children: childrenRoutes },
];
