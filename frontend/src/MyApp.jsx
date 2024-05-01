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
    <Box display="flex" justifyContent="center">
      <IconButton
        onClick={colorMode.toggleColorMode}
        color="inherit"
        sx={{
          zIndex: 5,
          // width: "200px",
          // borderRadius: "25px",
          bgcolor: theme.palette.mode === "dark" ? "white" : "black",
          "&:hover": {
            "& .MuiSvgIcon-root": {
              color: "grey",
            },
          },
        }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon sx={{ color: "black" }} />
        ) : (
          <Brightness4Icon sx={{ color: "white" }} />
        )}
      </IconButton>
    </Box>
  );
}

export default MyApp;
