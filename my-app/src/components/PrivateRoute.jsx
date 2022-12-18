import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../Contexts/Authcontext";
function PrivateRoute({children}) {
    const { isAuth } = useContext(Authcontext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
 
export default PrivateRoute;
