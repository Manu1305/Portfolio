import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Criket from './Compo/Criket/Criket';
import Test from './Compo/Test/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* <Test/> */}
  </React.StrictMode>
);


reportWebVitals();
