// module1 Routes 
//module like as  HR , Accounting ...
import { RouteObject } from "react-router-dom";

const module1Routes: RouteObject[] = [
  { path: "home", element: <h3>module1 home </h3> },
  { path: "page1", element: <h3>Page 1 </h3> },
  { path: "page2", element: <h3>Page 2 </h3> },
];
export default module1Routes;
