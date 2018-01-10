import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter,
    Switch
} from 'react-router-dom'


import Home from './../pages/Home/index'
import Login from './../pages/Login/index'
import Hot from './../pages/Hot/index'
import db from './../components/utils/index'

import styles from './../style/nav.css'
import Discover from './../pages/Discover/index';
import TopList from '../pages/TopList/index';
import Playlist from './../pages/Playlist'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: db.get("nav")
        }
        console.log(this.state.nav,"con中的state")
        this.handleNav = this.handleNav.bind(this)
        
    }

    handleNav(clickNav) {
        this.setState({
            nav: clickNav
        })
        db.save(["nav"], { "nav": clickNav });
    }
    componentDidMount() {
        this.setState({
            nav: db.get("nav")
        })
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="m-top">
                        <div className={styles.wrap}>
                            <div className="logo"></div>
                            <ul className={styles.nav}>
                                <li
                                    onClick={this.handleNav.bind(null, "index")}
                                    className={this.state.nav === "index" ? styles.active : ""}
                                >
                                    <span>
                                        <Link to="/">发现音乐</Link>
                                        <sub className={styles.cor}></sub>
                                    </span>
                                </li>
                                <li
                                    onClick={this.handleNav.bind(null, "hot")}
                                    className={this.state.nav === "hot" ? styles.active : ""}
                                >
                                    <span>
                                        <Link to="/hot">我的音乐</Link>
                                        <sub className={styles.cor}></sub>
                                    </span>
                                </li>
                                <li
                                    onClick={this.handleNav.bind(null, "login")}
                                    className={this.state.nav === "login" ? styles.active : ""}
                                >
                                    <span>
                                        <Link to="/login">朋友</Link>
                                        <sub className={styles.cor}></sub>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/hot" component={Hot} />
                        <Route path="/login" component={Login} />
                        <Route path="/discover/toplist" component={TopList} />
                        <Route path="/discover" component={Discover} /> 
                        <Route path="/playlist" component={Playlist} /> 
                    </Switch>
                    
                </div>
            </HashRouter>
        )
    }
}

export default App;