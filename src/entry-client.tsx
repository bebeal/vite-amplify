// entry-client: hydrates the app using the framework's client-side API: ReactDom.hydrateRoot in this case
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

import './index.css';

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  }
});

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <RouterProvider router={router} future={{ v7_startTransition: true, }} />);
