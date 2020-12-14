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

const fcmToken = () => {
  if (window.device.platform === "iOS") {
    window.FirebasePlugin.grantPermission((hasPermission) => {
      if (hasPermission === "true") {
        window.FirebasePlugin.onApnsTokenReceived((apnsToken) => {
          console.log(apnsToken);
          window.FirebasePlugin.hasPermission((hasPermission) => {
            console.log(hasPermission);
            // onTokenRefresh
            window.FirebasePlugin.onTokenRefresh((token) => {
              console.log('onTokenRefresh Registration ID: ', token);
              // send to database
              alert('onTokenRefresh Registration ID: ', token);
            }, console.error);
            // getToken
            window.FirebasePlugin.getToken((token) => {
              console.log('getToken Registration ID: ', token);
              // send to database
              alert('getToken Registration ID: ', token);
            }, console.error);
          });
      }, function(error) {
          console.error(error);
      });
      }
  });
  } else {
    window.FirebasePlugin.getToken((token) => {
      console.log('FCM Registration ID: ', token);
      // send to database
    }, console.error);
  }
}

const crashlytics = () => {
  window
    .FirebasePlugin
    .setCrashlyticsCollectionEnabled(
      true,
      () => console.log("Crashlytics data collection is enabled"),
      (error) => console.error("Crashlytics data collection couldn't be enabled: " + error)
    );
    // Other methods:
    // didCrashOnPreviousExecution, isCrashlyticsCollectionEnabled, setCrashlyticsUserId, setCrashlyticsCustomKey, logMessage, logError
}

const analytics = () => {
  window.FirebasePlugin.setAnalyticsCollectionEnabled(true);
  window.FirebasePlugin.isAnalyticsCollectionEnabled((enabled) => {
    console.log("Analytics data collection is "+(enabled ? "enabled" : "disabled"));
    window.FirebasePlugin.logEvent("cordova_started", { content_type: "page_view", item_id: "index"});
    window.FirebasePlugin.setScreenName("Index");
    window.FirebasePlugin.setUserId("bhar4t");
    window.FirebasePlugin.setUserProperty("name", "Bharat Sahu");
  }, (error) => {
    console.error("Error getting Analytics data collection setting: " + error);
  });
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    console.log('Device Ready')
    renderReactDOM();
    fcmToken();
    crashlytics();
    analytics();
    setTimeout(() => {
      window.FirebasePlugin.abc().adfd();
    }, 5000);
  }, false);
} else {
  renderReactDOM();
}

reportWebVitals();
