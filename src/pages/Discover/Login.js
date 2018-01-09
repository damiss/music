import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './../../style/login.css'
import Layer from "./../../components/layer/index";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layer: false
        }

        this.handleToggleLogin = this.handleToggleLogin.bind(this)
    }

    handleToggleLogin() {
        this.setState({
            layer: false
        })
    }

    render() {
        
        const cx = classNames({
            [styles.myInfo]: true,
            [styles.lBg]: true
        })
        return (
            <div>
                <div className={cx}>
                    <p className={styles.note}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <a href="javascript:;" onClick={this.handleToggleLogin} className={[styles.lBg, styles.loginBtn].join(" ")}>用户登录</a>
                </div>
            </div>
        )
    }
}