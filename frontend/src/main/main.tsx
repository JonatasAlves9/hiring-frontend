import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './routing/Router.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeDark } from '../presentation/style/themes.ts';
import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/dist/rsuite.min.css';
import 'react-activity/dist/library.css';
import './style.css';
import { ToastContainer } from 'react-toastify';
import { makeStock } from './factories/usecases/stocks/remote-stocks-factory.ts';
import StockProvider from '../presentation/hooks/useStocks.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <BrowserRouter>
        <StockProvider stock={makeStock()}>
          <>
            <ToastContainer />
            <Router />
          </>
        </StockProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
