import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/global/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
