import React from 'react';
import ReactDOM from 'react-dom';
import { BasicRoute } from '@/Routes'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <BasicRoute />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
