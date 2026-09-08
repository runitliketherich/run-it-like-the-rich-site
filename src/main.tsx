import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import RichApp from './App.tsx';
import VirtualHqApp from './vhq/App.tsx';
import './index.css';
import './vhq/index.css';

const isVirtualHq = window.location.pathname === '/vhq' || window.location.pathname.startsWith('/vhq/');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isVirtualHq ? <VirtualHqApp /> : <RichApp />}
  </StrictMode>,
);
