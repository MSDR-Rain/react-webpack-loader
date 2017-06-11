import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var appContainer = document.getElementById("root");

if (appContainer) {
  ReactDOM.render(
    <App />,
    appContainer
  );
}