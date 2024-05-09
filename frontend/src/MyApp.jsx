import React from "react";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ColorModeContext from "./ColorModeContext";

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box display="inline-block" justifyContent="center">
      <IconButton
        onClick={(event) => {
          event.preventDefault(); // Prevent default behavior
          colorMode.toggleColorMode();
        }}
        color="inherit"
        size="small"
        type="button"
        sx={{
          zIndex: 5,
          bgcolor: theme.palette.mode === "dark" ? "white" : "black",
          marginBottom: "0.25rem",
          marginLeft: "0.5rem",
          border: "2px solid grey",
          // padding: "6px", // Adjust padding to make it smaller
          "&:hover": {
            "& .MuiSvgIcon-root": {
              color: "grey",
            },
            borderColor: theme.palette.mode === "dark" ? "white" : "black",
          },
        }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon sx={{ fontSize: "medium", color: "black" }} /> // Adjust fontSize to make icon smaller
        ) : (
          <Brightness4Icon sx={{ fontSize: "medium", color: "white" }} /> // Adjust fontSize to make icon smaller
        )}
      </IconButton>
    </Box>
  );
}

export default MyApp;
