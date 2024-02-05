import App from "@/App";
import { PageNotFoundPage, SensorsPage } from "@/pages";
import { Suspense } from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import Routes from "./routes";
import SignInPage from "@/pages/signInPage";

const AppRoutesContainer = () => {
  return (
    <>
      <AppRoutes>
        <Route path={Routes.HOME} element={<App />}>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <SensorsPage />
              </Suspense>
            }
          />
          <Route
            path={Routes.SENSORS}
            element={
              <Suspense fallback={<></>}>
                <SensorsPage />
              </Suspense>
            }
          />

          <Route
            path={"*"}
            element={
              <Suspense fallback={<></>}>
                <PageNotFoundPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path={Routes.SIGN_IN}
          element={
            <Suspense fallback={<></>}>
              <SignInPage />
            </Suspense>
          }
        />

        <Route
          path={"*"}
          element={
            <Suspense fallback={<></>}>
              <PageNotFoundPage />
            </Suspense>
          }
        />
      </AppRoutes>
    </>
  );
};
export { AppRoutesContainer };
