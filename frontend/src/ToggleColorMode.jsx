// ToggleColorMode.jsx
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import ColorModeContext from "./ColorModeContext";
import MyApp from "./MyApp";

function ToggleColorMode() {
  const storedMode = localStorage.getItem("colorMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(
    storedMode || (prefersDarkMode ? "dark" : "light")
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("colorMode", newMode);
        updateAppStyles(newMode); // Update App styles when color mode changes
      },
    }),
    [mode]
  );

  const updateAppStyles = (mode) => {
    const root = document.documentElement;
    const appStyles = getComputedStyle(root).getPropertyValue("--app-styles");
    const cssVariables =
      mode === "dark" ? darkModeCssVariables : lightModeCssVariables;

    // Merge app styles with mode-specific CSS variables
    root.style.cssText = `${appStyles}; ${cssVariables}`;
  };

  const lightModeCssVariables = `
    --body-color: hsl(var(--hue), var(--sat), 98%);
    --text-color: hsl(var(--hue), var(--sat), 46%);
    --title-color: hsl(var(--hue), var(--sat), 20%);
    /* Define other light mode variables here */
    --title-color-dark: hsl(var(--hue), var(--sat), 0%);
    --container-color: #ffffff;
    --header-border-color: 0 4px 4px -4px rgba(0, 0, 0, 0.15),
    0 -4px 4px -4px rgba(0, 0, 0, 0.15);
    --border-color: rgba(0, 0, 0, 0.1);
    --border-shadow-color: rgb(255 255 255 / 30%);
  `;

  const darkModeCssVariables = `
    --body-color: #121212;
    --text-color: hsl(var(--hue), var(--sat), 80%);
    --title-color: hsl(var(--hue), var(--sat), 90%);
    /* Define other dark mode variables here */
    --title-color-dark: hsl(var(--hue), var(--sat), 100%);
    --container-color: #121212;
    --header-border-color: 0 4px 4px -4px rgba(255, 255, 255, 0.15),
    0 -4px 4px -4px rgba(255, 255, 255, 0.15);
    --border-color: rgba(255, 255, 255, 0.1);
    --border-shadow-color: rgb(255 255 255 / 70%);
  `;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  // When component mounts, update App styles with the initial color mode
  React.useEffect(() => {
    updateAppStyles(mode);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
