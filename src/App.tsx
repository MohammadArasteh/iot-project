import { Navigate, useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "./layouts";
import Routes from "./router/routes";
import { useAppSelector } from "./lib";
import React from "react";
import OneSignal from "react-onesignal";

function App() {
  const isUserLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const location = useLocation();

  React.useEffect(() => {
    OneSignal.init({
      appId: "e1885cbd-728f-40e5-b848-be1402f8d286",
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: true,
      },
    });
  }, []);

  return isUserLoggedIn ? (
    <Layout />
  ) : (
    <Navigate to={Routes.SIGN_IN} replace state={{ location }} />
  );
}

export default App;
