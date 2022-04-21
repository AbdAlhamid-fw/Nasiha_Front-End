import { FunctionComponent } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import AuthenticatedRoute from "../Components/Organisms/AuthenticatedRoute";
import PrivateRoutes from "./PrivateRoutes/privateRoutes";
import PublicRoutes from "./PublicRoutes/publicRoutes";

interface MainRouterProps {}
export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: PublicRoutes,
  },
  {
    path: "auth",
    element: <AuthenticatedRoute />,
    children: PrivateRoutes,
  },
];

const MainRouter: FunctionComponent<MainRouterProps> = () => {
  let element = useRoutes(routes);
  return element;
};

export default MainRouter;

// The useRoutes hook is the functional equivalent of <Routes>, but it uses JavaScript objects instead of <Route> elements to define your routes. These objects have the same properties as normal <Route> elements, but they don't require JSX.
//https://reactrouter.com/docs/en/v6/api#useroutes
