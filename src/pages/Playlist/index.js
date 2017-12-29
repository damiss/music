import React, { Component } from 'react'
import SubNav from './../../components/subNav/index'

import axios from './../../components/axios/index'

export default class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // axios.get('')
        // console.log(this.props.location.search.replace("?id=", ""));
        axios.get(`/playlist/detail${this.props.location.search}`)
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    render() {
        const history = this.props.history
        return (
            <div>
                <SubNav history={history} />
            </div>
        )
    }
}