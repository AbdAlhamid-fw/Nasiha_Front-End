// routes donesn't need login
import { RouteObject } from "react-router-dom";
import Home from "../../Pages/Home";

import Contact from "../../Pages/Contact";
import AboutUs from "../../Pages/AboutUs";
import Clients from "../../Pages/Clients";
import CreateForm from "../../Pages/Home/CreateForm";

const PublicRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/add-offer", element: <CreateForm /> },
  { path: "contact", element: <Contact /> },
  { path: "About-us", element: <AboutUs /> },
  { path: "Clients", element: <Clients /> },
  { path: "*", element: <h1>404</h1> },
  { path: "login", element: <h1>login</h1> },
  { path: "test", element: <h1>test</h1> },
];
export default PublicRoutes;
