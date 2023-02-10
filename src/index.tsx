import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {routes} from './routes/index.tsx';

const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes);

root.render(<RouterProvider router={router} />);
