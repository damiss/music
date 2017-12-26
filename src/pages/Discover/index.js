import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    HashRouter,
    NavLink
} from 'react-router-dom'

import SubNav from './../../components/subNav/index'
import TopList from "./../TopList/index";

export default class Discover extends Component {
    constructor(props) {
        super(props);
        console.log(this)
    }
    render() {
        const history = this.props.history   
        return (
            <div>
                <SubNav history={history} />
                <h1>discover</h1>
            </div>
        )
    }
}