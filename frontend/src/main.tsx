import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AdminApp from './AdminApp';
import './index.css';

// Verificar se estamos acessando o painel admin
const isAdmin = window.location.pathname.startsWith('/admin');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {isAdmin ? <AdminApp /> : <App />}
    </BrowserRouter>
  </React.StrictMode>
);
