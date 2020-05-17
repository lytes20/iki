import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Docs from './docs/Docs';
import '../node_modules/highlight.js/styles/ocean.css';

ReactDOM.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>,
  document.getElementById('root')
);
