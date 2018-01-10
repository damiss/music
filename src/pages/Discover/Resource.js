import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import classNames from 'classnames';

import styles from './../../style/resource.css'
import axios from './../../components/axios/index'

import Login from './Login'
import Layer from './../../components/layer/index'

@observer
export default class Resource extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        var cx = classNames({
            [styles.discoverModule]: true,
            [styles.clear]: true
        })
        return (
            <div className={cx}>
                <div className={styles.hotCon}>
                    <div className={styles.hotLeft}>
                        <div className={styles.wrap}>
                                {this.props.children}
                            {/* <ul>
                                {goodHtml}
                            </ul> */}
                        </div>
                    </div>
                </div> 
                <div className={styles.r}>
                    <Login />    
                </div>               
            </div>
        )
    }
}