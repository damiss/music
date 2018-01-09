import React, { Component } from 'react'

import styles from  './../../style/home.css'
import './../../style/reset.css'
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
        console.log(this.props, "home")
        return (
            <div>
                <Discover history={history} />
            </div>
        )
    }
}