import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { CartProvider } from './contexts/cart.context';

import './index.scss';
import App from './App';
import { store } from './store/store';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
