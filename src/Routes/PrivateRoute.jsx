import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router";
import Loader from "../Components/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
