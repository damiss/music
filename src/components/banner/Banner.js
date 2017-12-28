import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

import axios from './../axios/index'
import style from './banner.css'

@observer
export default class Banner extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.bannerStore.getDataBanner()
    }
    render() {
        const Banners = this.props.bannerStore.bannerImgs.map((item) => {
            return (<li key={item.encodeId}><img src={item.pic} /></li>)
        })
        console.dir(this.props)
        return (
            <div>
                <div className={style.wrap}>
                    <div className="banner-con">
                        <ul className="banner-img-con">
                            {Banners}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}