import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import './../../style/home.css'
import Discover from "./Discover/index";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-warp">
                    <div className="m-subnav">
                        <div className="wrap">
                            <div className="nav">
                                <Router>
                                    <div>
                                        <Link to="/discover">discover</Link>
                                        <Route exact path="/" component={Discover} />
                                    </div>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}