import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

import axios from './../axios/index'

@observer
export default class Banner extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.bannerStore.getDataBanner()
    }
    render() {
        // const Banners = this.state.banner.bannerImgs[0].data.banners.map((item) => (
        //     `<li><img src=${item.pic} /></li>`
        // ))
        console.dir(this.props)
        return (
            <div>
                <div className="banner-wrap">
                    <div className="banner-con">
                        <ul className="banner-img-con">
                            {  
                                console.log(this.props.bannerStore.bannerImgs.banners)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}