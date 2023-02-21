import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import Clientes from './views/Clientes';
import ClienteMostrar from './views/ClienteMostrar';
import Pagina404 from './views/Pagina404';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/cliente/novo" element={<ClienteMostrar/>} />
      <Route path="/cliente/:id" element={<ClienteMostrar/>} />
      <Route path="*" element={<Pagina404/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
