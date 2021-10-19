import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <script
      data-cfasync="false"
      src="%PUBLIC_URL%/form-submission-handler.js"
    ></script>
  </BrowserRouter>,
  document.getElementById('root')
);
