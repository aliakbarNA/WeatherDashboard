
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline'; 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> 
    <App />
  </ThemeProvider>
);