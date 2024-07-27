// entry-client: hydrates the app using the framework's client-side API: ReactDom.hydrateRoot in this case
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <RouterProvider router={router} fallbackElement={null} future={{ v7_startTransition: true }} />);
