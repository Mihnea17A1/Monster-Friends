import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.js';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>,
  document.getElementById('root')
);

/* Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. 
In Create React App, a third-party library is used to measure these metrics (web-vitals).*/
reportWebVitals(/*console.log*/); 

