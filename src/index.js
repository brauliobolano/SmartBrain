// The Main component is rendered here instead of the App component.
// This is because the Main component wraps both the App and ParticlesComponent.
// By rendering the Main component, we ensure that the ParticlesComponent is not affected by state changes in the App component.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

import 'tachyons'; // CSS library for styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
