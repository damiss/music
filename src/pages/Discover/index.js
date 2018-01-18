import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { inject, observer } from 'mobx-react';

import SubNav from './../../components/subNav/index'
import TopList from "./../TopList/index"
import Banner from './../../components/banner/Banner'
import { bannerStore } from './../../components/store/Banner'
import Resource from './Resource'
import { resourceStore } from './../../components/store/Resource'
import DisNav from './../../components/disNav/DisNav'
import Cvrlist from './Cvrlist'
import { personalized } from './../../components/store/Personalized'
import Recommend from "./Recommend"
import Album from './Album'
import db from './../../components/utils'

@inject('login', )
@observer
export default class Discover extends Component {
    constructor(props) {
        super(props);
        console.log(this)
        this.state = {
            _csrf: this.handleGetCookie("_csrf") ? true : false
        }
        this.handleGetCookie = this.handleGetCookie.bind(this)
    }

    componentWillMount() {
        console.log(this.handleGetCookie("_csrf"));
    }
    componentWillReceiveProps(nextProps) {
        console.log('loginstate', nextProps)
    }

    handleGetCookie(c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=")
            if (c_start !== -1) {
                c_start = c_start + c_name.length + 1
                var c_end = document.cookie.indexOf(";", c_start)
                if (c_end === -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }
    render() {
        const history = this.props.history        
        return (
            <div>
                <SubNav history={history} />
                <Banner bannerStore={bannerStore} />
                <Resource>
                    <DisNav history={history} title={"热门推荐"} />
                    <Cvrlist history={history} personalized={personalized} />
                    <RecMix history={history} onLogin={this.state._csrf} loginState={this.props.login.loginState} />
                    <Album />
                </Resource>
                
            </div>
        )
    }
}

/* const RecMix = (props) => (
    
) */
function RecMix(props) {
    console.log(props.loginState,"===========================")
    if (props.loginState) {
        return (
            <div>
                <DisNav history={props.history} title={"个性化推荐"} />
                <Recommend />
            </div>
        )
    }else {
        return false
    }
}