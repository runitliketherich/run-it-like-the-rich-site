import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import RichApp from './App.tsx';
import VirtualHqApp from './vhq/App.tsx';
import TrainTheGaapApp from './train-the-gaap/App.tsx';
import StoryBookExitApp from './storybook-exit/App.tsx';
import './index.css';
import './vhq/index.css';
import './train-the-gaap/index.css';
import './storybook-exit/index.css';

const isVirtualHq = window.location.pathname === '/vhq' || window.location.pathname.startsWith('/vhq/');
const isTrainTheGaap = window.location.pathname === '/train-the-gaap' || window.location.pathname.startsWith('/train-the-gaap/');
const isStoryBookExit = window.location.pathname === '/storybook-exit' || window.location.pathname.startsWith('/storybook-exit/');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isVirtualHq ? <VirtualHqApp /> : isTrainTheGaap ? <TrainTheGaapApp /> : isStoryBookExit ? <StoryBookExitApp /> : <RichApp />}
  </StrictMode>,
);
