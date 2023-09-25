// import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { TwitchClientProvider } from './contexts/TwitchClientContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <TwitchClientProvider>
    <App />
  </TwitchClientProvider>,
  // </React.StrictMode>,
);
