import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import classNames from 'classnames'

import axios from './../axios/index'
import style from './banner.css'

@observer
export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSIndex: 0
        }
        this.handleLeftBanner = this.handleLeftBanner.bind(this)
        this.handleRightBanner = this.handleRightBanner.bind(this)
    }
    componentWillMount() {
        this.props.bannerStore.getDataBanner();
        /* this.timer = setInterval(() => {
            if (this.state.currentSIndex > 0) {
                this.setState({
                    currentSIndex: --this.state.currentSIndex
                })
            } else {
                this.setState({
                    currentSIndex: this.props.bannerStore.bannerImgs.length - 1
                })
            }
        }, 3000) */
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    handleLeftBanner() {
        if(this.state.currentSIndex > 0) {
            this.setState({
                currentSIndex: --this.state.currentSIndex
            })
        }else {
            this.setState({
                currentSIndex: this.props.bannerStore.bannerImgs.length - 1
            })
        }
        console.log(this.state.currentSIndex)
    }
    handleRightBanner() {
        if(this.state.currentSIndex < this.props.bannerStore.bannerImgs.length - 1) {
            this.setState({
                currentSIndex: ++this.state.currentSIndex
            })
        }else {
            this.setState({
                currentSIndex: 0
            })
        }
        
        console.log(this.state.currentSIndex)
    }
    render() {
        const Banners = this.props.bannerStore.bannerImgs.map((item) => item.pic)
        const encodeId = this.props.bannerStore.bannerImgs.map((item) => item.encodeId)
        console.log(this.props.bannerStore.bannerImgs[0])

        let cx = classNames.bind(style);
        let className = cx({
            [style.left]: true,
            [style.bg]: true,
            [style.hand]: true
        })
        let right = cx({
            [style.right]: true,
            [style.bg]: true,
            [style.hand]: true
        })
        return (
            <div>
                <div className={style.wrap}>
                    <div className={style.banner}>
                        <div data-id={encodeId[this.state.currentSIndex]} className={style.bannerBox}>
                            <img src={Banners[this.state.currentSIndex]} alt=""/>
                        </div>
                        <div className={className} onClick={this.handleLeftBanner}>left</div>
                        <div className={right} onClick={this.handleRightBanner}>right</div>
                    </div>
                </div>
            </div>
        )
    }
}