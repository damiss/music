import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

import axios from './../../components/axios/index'

@observer
export default class Resource extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.resource.getDataRes()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                res
            </div>
        )
    }
}