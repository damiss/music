import React, { Component } from 'react'

import styles from  './../../style/home.css'
import Discover from './../Discover/index'
import Resource from './Resource'

import { resourceStore } from './../../components/store/Resource'

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
                <Resource resource={resourceStore} />
            </div>
        )
    }
}