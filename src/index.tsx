import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./services";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

