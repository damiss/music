import React, { Component } from 'react'
import { observable, autorun } from 'mobx';

import axios from './../axios/index'


var banners = observable({
    banners: []
})

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
                <div className="banner-wrap">
                    <div className="banner-con">
                        <ul className="banner-img-con">
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}