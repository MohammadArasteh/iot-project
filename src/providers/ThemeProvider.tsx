import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material";

interface IThemeProviderProps {
  theme: Theme;
}

const ThemeProvider: React.FunctionComponent<
  React.PropsWithChildren<IThemeProviderProps>
> = (props) => {
  const { children, theme } = props;
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
