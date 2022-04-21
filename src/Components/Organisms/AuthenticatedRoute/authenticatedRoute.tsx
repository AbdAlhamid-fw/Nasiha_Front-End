import { FunctionComponent, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
// import PageLayout from "../page-layout";
interface AuthenticatedRouteProps {}

const AuthenticatedRoute: FunctionComponent<AuthenticatedRouteProps> = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    // TODO: put '!' before cookies.KEY
    cookies.KEY_TOKEN && navigate("/login");
  }, [cookies.KEY_TOKEN, navigate]);
  return (
    <>
      {/* TDOO */}
    
        <Outlet />

    </>
  );
};

export default AuthenticatedRoute;
