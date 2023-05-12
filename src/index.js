import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App';
import './index.css';
import "./server"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>
);


