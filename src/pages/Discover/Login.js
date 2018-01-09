import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './../../style/login.css'

export default class Login extends Component {
    render() {
        const cx = classNames({
            [styles.myInfo]: true,
            [styles.lBg]: true
        })
        return (
            <div>
                <div className={cx}>
                    <p className={styles.note}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <a href="javascript:;" className={[styles.lBg, styles.loginBtn].join(" ")}>用户登录</a>
                </div>
            </div>
        )
    }
}