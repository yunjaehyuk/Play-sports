import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store.js'
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import './fontawesome';
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<React.StrictMode>
<Provider store={store}>
<HashRouter>
   <App />
</HashRouter>
</Provider>
</React.StrictMode>
);

