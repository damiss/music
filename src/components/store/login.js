import { observable, action, runInAction, useStrict } from 'mobx';

import axios from './../axios/index'

class Login {
    @observable loginState
    @observable user

    // 初始化 state
    constructor() {
        this.loginState = false;
        this.user = null;
    }

    @action loginIn = async (phone, password) =>  {
        const user = await axios.get("login/cellphone", {
            params: {
                phone: phone,
                password: password
            } 
        })
        runInAction(() => {
            this.user = user;
            console.log(this.user)
        });
    }

    @action setLoginState(data) {
        this.loginState = true;
    }
    @action setUser(data) {
        this.user = data;
    }
}

export default new Login()