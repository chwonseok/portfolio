import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <script
      data-cfasync="false"
      src="%PUBLIC_URL%/form-submission-handler.js"
    ></script>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
