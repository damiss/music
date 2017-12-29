import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

import axios from './../../components/axios/index'

@observer
export default class Resource extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount() {
        this.props.resource.getDataRes()
    }
    handleClick(id) {
        this.props.history.push(`/playlist?id=${id}`)
    }
    render() {
        const goodData = this.props.resource.data.$mobx.values;
        const goodHtml = goodData.map((item) => (
            <li key={item.id}
                onClick={this.handleClick.bind(null, item.id)}
            >
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