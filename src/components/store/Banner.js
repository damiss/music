import { observable, action, runInAction, useStrict } from 'mobx';
import axios from './../axios/index'

class Banner {
    @observable bannerImgs
    @observable bannerLen

    // 初始化 state
    constructor() {
        this.bannerImgs = []
        this.bannerLen = 0
    }

    @action bannerData = async () => {
        const bannerData = await axios.get("/banner")
        runInAction(() => {
            this.bannerImgs = bannerData.data.banners
            this.bannerLen = bannerData.data.banners.length
            console.log(bannerData.data.banners)
        })
    }
}

export default new Banner()