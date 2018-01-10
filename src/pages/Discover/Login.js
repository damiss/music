import React, { Component } from 'react'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react';

import styles from './../../style/login.css'
import Layer from "./../../components/layer/index";

@inject('login', )
@observer
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleLogin: false
        }

        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin() {
        var layer = document.createElement("div");
        layer.className = "layer";
        layer.innerHtml = 123;
        layer.style.height = "100px";
        layer.style.width = "100px";
        layer.style.position = "absolute";
        layer.style.top = "50%";
        layer.style.left = "50%";
        layer.style.background = "red";
        document.body.appendChild(layer);
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
                    <a href="javascript:;" onClick={this.handleLogin} className={[styles.lBg, styles.loginBtn].join(" ")}>用户登录</a>
                </div>
            </div>
        )
    }
}