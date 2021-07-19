import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import "uikit/dist/css/uikit.min.css";

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


