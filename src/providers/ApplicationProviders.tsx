import { ToastContainer } from "react-toastify";
import DirectionProvider from "./DirectionProvider";
import { Provider as RTKProvider } from "react-redux";
import { store } from "@/store";
import { Theme } from "@mui/material";
import ThemeProvider from "./ThemeProvider";

interface IApplicationProvidersProps {
  theme: Theme;
  direction: "rtl" | "ltr";
}

const ApplicationProviders: React.FunctionComponent<
  React.PropsWithChildren<IApplicationProvidersProps>
> = (props) => {
  const { children, direction, theme } = props;
  return (
    <RTKProvider store={store}>
      <ThemeProvider theme={theme}>
        <DirectionProvider direction={direction}>
          <ToastContainer theme="colored" position="bottom-left" rtl />
          {children}
        </DirectionProvider>
      </ThemeProvider>
    </RTKProvider>
  );
};

export default ApplicationProviders;
