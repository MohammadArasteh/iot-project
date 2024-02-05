import { Navigate, useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "./layouts";
import Routes from "./router/routes";
import { useAppSelector } from "./lib";

function App() {
  const isUserLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const location = useLocation();

  return isUserLoggedIn ? (
    <Layout />
  ) : (
    <Navigate to={Routes.SIGN_IN} replace state={{ location }} />
  );
}

export default App;
