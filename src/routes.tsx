import { Outlet, RouteObject } from 'react-router';
import { ThemeProvider } from 'next-themes';
import App from './App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true}>
        <Outlet />
      </ThemeProvider>
    ),
    hydrateFallbackElement: null,
    children: [{ index: true, element: <App /> }],
  },
];

export default routes;
