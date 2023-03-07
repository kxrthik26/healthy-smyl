import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("ServiceWorker.js").then(registration => {
    console.log("Service Worker Registered!")
    console.log(registration)
  }).catch(error => {
      console.log("Service Worker Registration Failed!");
      console.log(error);
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{ 
        token: { colorPrimary: '#0153FF' } 
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
