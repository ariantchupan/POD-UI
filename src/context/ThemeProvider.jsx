import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { themeColors } from "../constants/colors";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const theme = createTheme({
  typography: {
    fontFamily: "shabnam",
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 500,
    fontWeightHeavy: 700,
    fontWeightFat: 900,
  },
  direction: "rtl",
  palette: {
    primary: {
      main: themeColors.primary,
    },
    secondary: {
      main: themeColors.error,
    },
    error: { main: themeColors.error },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontSize: 17,
          height: 48,
          borderRadius: 12,
          fontWeight: 700,
          ":hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const ThemePanelProvider = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default ThemePanelProvider;
