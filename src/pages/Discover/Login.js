import React, { Component } from 'react'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react';

import axios from './../../components/axios'
import styles from './../../style/login.css'
import Layer from "./../../components/layer/index";

@inject('login', )
@observer
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: "",
            password: ""
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangePassWord = this.handleChangePassWord.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    handleLogin(event) {
        this.props.login.loginIn(this.state.phone, this.state.password)
    }
    handleChangePhone(event) {
        this.setState({
            phone: event.target.value
        })
    }
    handleChangePassWord(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleRefresh() {
        axios.get('/login/refresh')
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        const cx = classNames({
            [styles.myInfo]: true,
            [styles.lBg]: true
        })
        const loginInput = classNames({
            [styles.loginInput]: true
        })
        return (
            <div>
                <div className={cx}>
                    <p className={styles.note}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <a href="javascript:;" className={[styles.lBg, styles.loginBtn].join(" ")}>用户登录</a>
                    {/* <div className={loginInput}>
                        <div>手&nbsp;&nbsp;机: <input type="text" /></div>
                        <div>密&nbsp;&nbsp;码: <input type="password"/></div>
                        <a href="javascript:;">登录</a>
                    </div> */}
                    <div className={loginInput}>
                        <form>
                            <label>phone: <input type="text" value={this.state.phone} onChange={this.handleChangePhone} /></label>
                            <label>password: <input type="password" onChange={this.handleChangePassWord} /></label>
                        </form>
                        <button onClick={this.handleLogin}>Login</button>
                        {/* <hr />
                        <button onClick={this.handleRefresh}>Refresh</button> */}
                    </div>
                    
                </div>
            </div>
        )
    }
}