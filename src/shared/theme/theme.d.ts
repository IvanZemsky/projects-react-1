import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    white?: {
      main: string;
      dark: string;
      contrastText: string;
    };
  }
}
