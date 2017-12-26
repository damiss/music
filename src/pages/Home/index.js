import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    HashRouter
} from 'react-router-dom'

import './../../style/home.css'
import Discover from './../Discover/index'

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this);

        this.handlePath = this.handlePath.bind(this)
    }

    handlePath() {
        this.props.history.push("/discover")
    }

    render() {
        const history = this.props.history;
        return (
            <div>
                <Discover history={history} />
            </div>
        )
    }
}