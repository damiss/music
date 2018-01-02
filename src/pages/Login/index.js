import React, { Component } from 'react'

import goLogin from './../../components/store/login'
import axios from './../../components/axios/index'

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
        goLogin(this.state.phone, this.state.password)
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
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <h2>login</h2>
                <form>
                    <label>phone: <input type="text" value={this.state.phone} onChange={this.handleChangePhone} /></label>
                    <label>password: <input type="password" onChange={this.handleChangePassWord} /></label>
                </form>
                <button onClick={this.handleLogin}>Login</button>
                <hr/>
                <button onClick={this.handleRefresh}>Refresh</button>
            </div>
        )
    }
}