import { Palette } from "@mui/icons-material";
import { blue, grey, orange } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    white: {
      main: '#ffffff',
      dark: grey[300],
      contrastText: blue[500],
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.875rem',
    },
  },
});
