// scr/main.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import GlobalStyles from './styles/GlobalStyles';
import 'antd/dist/reset.css';
import App from './App';
import './i18n';
import { Spin } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Suspense jest potrzebny, aby poczekać na załadowanie plików językowych */}
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Spin size="large" /></div>}>
      <AppContextProvider>
        <GlobalStyles />
        {/* Usunięto atrybut `basename` */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </Suspense>
  </StrictMode>
);
