import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

const darkTheme = responsiveFontSizes(
  createTheme({ palette: { mode: 'dark' } }),
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
)
