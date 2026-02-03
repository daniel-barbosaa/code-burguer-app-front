import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import Routes from './routes/routes';
import StyleGlobal from './styles/globalStyles';
import { SidebarProvider } from './components/ui/sidebar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <SidebarProvider>
        <StyleGlobal />
        <AppProvider>
          <Routes />
        </AppProvider>
        <ToastContainer autoClose={3000} theme="light" />
      </SidebarProvider>
    </>
  </React.StrictMode>,
);
