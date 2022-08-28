import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store.js'
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import './fontawesome';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './layout/ScrollToTop.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<React.StrictMode>
<Provider store={store}>
<BrowserRouter basename={process.env.PUBLIC_URL}>
<ScrollToTop />
   <App />
</BrowserRouter>
</Provider>
</React.StrictMode>
);

