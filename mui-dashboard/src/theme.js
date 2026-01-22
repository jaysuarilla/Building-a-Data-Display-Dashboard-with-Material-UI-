// src/theme.js
import { createTheme } from "@mui/material/styles";

// Custom MUI theme with primary and secondary colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#9c27b0", // Purple
    },
  },
});

export default theme;
