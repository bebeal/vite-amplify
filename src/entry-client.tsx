// entry-client: creates the client side root using the framework's client-side API: ReactDom.createRoot in this case
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import routes from './routes';

import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
