import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import App from './router/Router'
import './style/reset.css'

ReactDOM.render(
    <HashRouter>
        <App nav="index" />
    </HashRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
