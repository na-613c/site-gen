import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { myFirebase } from './firebase/myFirebase'

import store from './mobx/Store'

export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value={{ ...myFirebase, store }}>
    <App />
  </Context.Provider>,

  document.getElementById('root')
);

