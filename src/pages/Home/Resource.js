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
        const goodData = this.props.resource.data.$mobx.values;
        const goodHtml = goodData.map((item) => (
            <li>
                <div><img src={item.coverImgUrl} alt=""/></div>
                <p>{item.name}</p>
            </li>
        ))
        return (
            <div>
                <ul>
                    { goodHtml }
                </ul>
            </div>
        )
    }
}