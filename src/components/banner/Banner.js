import React, { Component } from 'react'

import axios from './../axios/index'

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("/banner")
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                banner
            </div>
        )
    }
}