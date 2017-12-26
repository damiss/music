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

export default class SubNav extends Component {
    constructor(props) {
        super(props);
        console.log(this);

        this.handlePath = this.handlePath.bind(this)
        this.handlePathList = this.handlePathList.bind(this)
    }

    handlePath() {
        this.props.history.push("/discover")
    }
    handlePathList() {
        this.props.history.push("/discover/toplist")
    }
    render() {
        return (
            <div>
                <div className="home-warp">
                    <div className="m-subnav">
                        <div className="wrap">
                            <div className="sub-nav">
                                <ul className="sub-nav-con">
                                    <li onClick={this.handlePath}><em>推荐</em></li>
                                    <li onClick={this.handlePathList}><em>排行</em></li>
                                    <li><em>歌单</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}