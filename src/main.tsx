import ReactDOM from "react-dom/client";
import "react-toastify/ReactToastify.min.css";
import ApplicationProviders from "./providers/ApplicationProviders.tsx";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { AppRoutesContainer } from "./router/router.tsx";
import { theme } from "./theme/theme.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApplicationProviders direction="ltr" theme={theme}>
    <CssBaseline />
    <div className="h-full">
      <BrowserRouter>
        <AppRoutesContainer />
      </BrowserRouter>
    </div>
  </ApplicationProviders>
);
