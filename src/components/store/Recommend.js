import { observable, action, runInAction, useStrict } from 'mobx';
import axios from './../axios/index'

class Recommend {
    @observable recommend

    // 初始化 state
    constructor() {
        this.recommend = []
    }

    @action getData = async () => {
        const recData = await axios.get("/recommend/resource")
        runInAction(() => {
            this.recommend = recData.data.recommend
            console.log(recData,"=======================================recData")
        })
    }
}

export default new Recommend()