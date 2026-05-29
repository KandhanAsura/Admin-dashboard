// MUI custom theme
import { createTheme } from '@mui/material/styles'

export const getTheme = (mode) => createTheme({
  palette: {
    mode, // 'light' or 'dark'
    primary: {
      main: '#6366f1', // indigo — looks modern and clean
    },
    background: {
      default: mode === 'light' ? '#f1f5f9' : '#0f172a',
      paper:   mode === 'light' ? '#ffffff'  : '#1e293b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        },
      },
    },
  },
})