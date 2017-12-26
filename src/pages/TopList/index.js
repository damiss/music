import React, { Component } from 'react'
import SubNav from './../../components/subNav/index'

export default class TopList extends Component {
    constructor(props) {
        super(props);
        console.log(this)
    }
    render() {
        const history = this.props.history
        return (
            <div>
                <SubNav history={history} />
                <h1>TopList</h1>
            </div>
        )
    }
}