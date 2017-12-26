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
import TopList from "./../TopList/index"
import Banner from './../../components/banner/Banner'

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
                <Banner />

            </div>
        )
    }
}