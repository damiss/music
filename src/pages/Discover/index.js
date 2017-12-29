import React, { Component } from 'react'

import SubNav from './../../components/subNav/index'
import TopList from "./../TopList/index"
import Banner from './../../components/banner/Banner'
import { bannerStore } from './../../components/store/Banner'
import Resource from './Resource'
import { resourceStore } from './../../components/store/Resource'

export default class Discover extends Component {
    constructor(props) {
        super(props);
        console.log(this)
    }

    render() {
        const history = this.props.history   
        return (
            <div>
                <SubNav history={history} />
                <Banner bannerStore={bannerStore} />
                <Resource resource={resourceStore} history={history} />
            </div>
        )
    }
}