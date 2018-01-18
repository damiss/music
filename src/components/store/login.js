import { observable, action, runInAction, useStrict } from 'mobx';

import axios from './../axios/index'
import db from './../../components/utils/index'

class Login {
    @observable loginState
    @observable user
    @observable name

    // 初始化 state
    constructor() {
        this.user = null;
        this.loginState = db.getUser("user") ? true : false;
        this.name = db.getUser("userName") ? db.getUser("userName").replace(/"/g, "") : "LoginIn→";
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
            this.name = user.data.profile.nickname;
            if (!db.getUser("user")){
                db.save(["user"], { user })
                db.save(["userName"], { "userName": user.data.profile.nickname })
            }
            console.log(user.data.profile)
            // alert("登录成功")
        });
    }
}

export default new Login()