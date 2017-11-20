import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// JSX
// webpack will compile JSX to the normal JS
// <App /> is component, with capital letter it is always component
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
