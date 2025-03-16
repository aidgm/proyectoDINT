import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TareasProvider } from './contexto/TareasContexto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TareasProvider>
      <App />
    </TareasProvider>
  </React.StrictMode>
);
