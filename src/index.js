import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { CartProvider } from './context/CartContext'; // CartProvider import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <CartProvider> {/* Wrap CartProvider around the whole app */}
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
