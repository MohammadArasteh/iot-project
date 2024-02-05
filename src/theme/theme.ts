import { createTheme } from "@mui/material";
import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";

export const breakpoints = {
  sm: 480,
  md: 576,
  lg: 768,
  xl: 992,
  "2xl": 1200,
} as const;

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    "2xl": true;
  }
}

const palette = {
  primary: {
    main: "#7756E3",
    light: "#f2eafb",
    dark: "#271B4F",
    contrastText: "#fff",
  },
  success: {
    main: "#2e7d32",
    light: "#44bd32",
  },
  secondary: {
    main: "#7e8299",
  },
  orange: {
    ...orange,
  },
  green: {
    ...green,
  },
  red: {
    ...red,
  },
  blue: {
    ...blue,
  },
  yellow: {
    ...yellow,
  },
  gray: {
    surface: "#f8f9fb",
    surfaceTransparent: "#f8f9fb69",
    surface2: "#f4f5f7",
    main: "#404040",
    dark: "#4F5174",
    light: "#707070",
    lightest: "#a7a7be",
    divider: "#e3eff7",
    menu: "#747474",
    border: "#f1f1f2",
  },
  grey: {
    ...grey,
  },
  background: {
    default: "#fff",
    secondary: "#fbfbfd",
  },
};

export const theme = createTheme({
  palette: palette,
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      ...breakpoints,
    },
  },
  typography: {
    fontFamily: "sans-serif",
    fontSize: 13,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.gray.light,
        },
        h6: {
          fontWeight: 600,
          color: palette.gray.main,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgb(196 196 196)" },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: { background: "white", marginBottom: "1rem" },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderColor: "#f1f1f2!important",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
          "&:focus": {
            outline: "none",
          },
          "&:disabled": {
            color: "rgba(0, 0, 0, 0.7)",
          },
        },
        outlined: {
          "&": {
            borderColor: "#f1f1f2",
          },
          "&:hover": {
            borderColor: "#f1f1f2!important",
          },
        },
        containedPrimary: {
          "&:hover": {
            boxShadow: "none",
            filter: "brightness(95%)",
            backgroundColor: palette.primary.main,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow:
            "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
        },
        listbox: {
          maxHeight: "45vh",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        sx: {
          borderRadius: "0.5rem",
        },
      },
      styleOverrides: {
        elevation1: {
          boxShadow: "0 5px 20px rgba(173,181,217,.05)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before": {
            display: "none",
          },
          "&:disabled": {
            backgroundColor: "rgb(100 100 100 / 12%)",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            transitionDelay: "9999s",
            transitionProperty: "background-color, color",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-root.Mui-disabled": {
            opacity: 0.4,
          },
          "&.MuiInputLabel-root.Mui-focused": {
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: "0px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(123 123 123 / 87%)",
          },
          "& fieldset": {
            borderColor: palette.gray.border,
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.gray.border,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${palette.gray.border}!important`,
          },
          "&:hover fieldset": {
            borderColor: `${palette.gray.border}!important`,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-root.Mui-disabled": {
            color: "#5e5e5e",
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {},
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: { cursor: "pointer !important", userSelect: "none" },
        label: {},
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          color: palette.gray.light,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "20px 24px !important",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#ebd6ff",
          minWidth: 35,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "#ebd6ff",
        },
      },
    },
  },
});
