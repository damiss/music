import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import App from './router/Router'
import './style/reset.css'
import login from './components/store/login'
import banner from './components/store/Banner'
import album from './components/store/Album'
import todaySong from './components/store/TodaySong'
import recommend from './components/store/Recommend'

const stores = {
    login,
    banner,
    album,
    todaySong,
    recommend,
};

ReactDOM.render(
    <HashRouter>
        <Provider {...stores}>
            <App nav="index"/>
        </Provider>
    </HashRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
