import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {routes} from './routes/index.tsx';
import { Provider } from 'mobx-react';
import { rootStore } from './stores/index.ts';

const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes);

root.render(
  <Provider {...rootStore}>
    <RouterProvider router={router} />
  </Provider>
);
