import { RouteObject, Outlet } from "react-router-dom";
import App from "./App";

const routes: RouteObject[] = [{
    path: "/",
    element: <Outlet />,
    children: [
        {
            index: true,
            element: <App />,
        }
    ]
}];

export default routes;
