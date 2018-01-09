import React, { Component } from 'react'

import styles from './layer.css'

export default class Layer extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div>
                <div className={[styles.layer]}>
                    <div className={[styles.bar]}>登录框标题</div>
                </div>
            </div>
        )
    }
}