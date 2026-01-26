import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import Routes from './routes/routes';
import StyleGlobal from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <StyleGlobal />
      <AppProvider>
        <Routes />
      </AppProvider>
      <ToastContainer autoClose={3000} theme="light" />
    </>
  </React.StrictMode>,
);
