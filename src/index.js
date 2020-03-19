import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App2 from './appweb';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<App2 />, document.getElementById('app'));
// ReactDOM.render(<App2 />, document.querySelector('#app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
