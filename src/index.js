import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log('Start App');

const renderReactDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'));
}

if (window.cordova) {
  // FCM
  console.log(window)
  if (window.device.platform === "iOS") {
    window.FirebasePlugin.hasPermission((hasPermission) => {
      window.FirebasePlugin.getToken((token) => {
        console.log('FCM Registration ID: ', token);
        // send to database
      }, console.error);
      window.FirebasePlugin.onTokenRefresh((token) => {
        console.log('FCM Registration ID: ', token);
        // send to database
      }, console.error);
    });
  } else {
    window.FirebasePlugin.getToken((token) => {
      console.log('FCM Registration ID: ', token);
      // send to database
    }, console.error);
  }

  document.addEventListener('deviceready', () => {
    console.log('Device Ready')
    renderReactDOM();
  }, false);
} else {
  renderReactDOM();
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
