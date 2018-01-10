import { observable, action, runInAction, useStrict } from 'mobx';

import axios from './../axios/index'

class Login {
    @observable loginState
    @observable user

    // 初始化 state
    constructor() {
        this.user = null;
        this.loginState = false;
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
            this.loginState = true;
            console.log(this.user)
        });
    }
}

export default new Login()