import App from "@/App";
import {
  AuthorizedUsersPage,
  HumidityRawDataListPage,
  LdrRawDataListPage,
  PageNotFoundPage,
  SensorsPage,
  TemperatureRawDataListPage,
} from "@/pages";
import { Suspense } from "react";
import { Routes as AppRoutes, Navigate, Route } from "react-router-dom";
import Routes from "./routes";
import SignInPage from "@/pages/signInPage";
import PirRawDataListPage from "@/pages/pirRawDataListPage";
import RfidRawDataListPage from "@/pages/rfidRawDataListPage";

const AppRoutesContainer = () => {
  return (
    <>
      <AppRoutes>
        <Route path={Routes.HOME} element={<App />}>
          <Route index element={<Navigate to={Routes.SENSORS} />} />
          <Route
            path={Routes.SENSORS}
            element={
              <Suspense fallback={<></>}>
                <SensorsPage />
              </Suspense>
            }
          />
          <Route
            path={`${Routes.SENSORS}/${Routes.LDR_DATA_TABLE}`}
            element={
              <Suspense fallback={<></>}>
                <LdrRawDataListPage />
              </Suspense>
            }
          />
          <Route
            path={`${Routes.SENSORS}/${Routes.TEMPERATURE_DATA_TABLE}`}
            element={
              <Suspense fallback={<></>}>
                <TemperatureRawDataListPage />
              </Suspense>
            }
          />
          <Route
            path={`${Routes.SENSORS}/${Routes.HUMIDITY_DATA_TABLE}`}
            element={
              <Suspense fallback={<></>}>
                <HumidityRawDataListPage />
              </Suspense>
            }
          />
          <Route
            path={`${Routes.SENSORS}/${Routes.PIR_DATA_TABLE}`}
            element={
              <Suspense fallback={<></>}>
                <PirRawDataListPage />
              </Suspense>
            }
          />
          <Route
            path={`${Routes.SENSORS}/${Routes.RFID_DATA_TABLE}`}
            element={
              <Suspense fallback={<></>}>
                <RfidRawDataListPage />
              </Suspense>
            }
          />

          <Route
            path={Routes.USERS}
            element={
              <Suspense fallback={<></>}>
                <AuthorizedUsersPage />
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
