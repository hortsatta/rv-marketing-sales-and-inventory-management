import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './features/app/app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
