import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/App';

ReactDom.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
