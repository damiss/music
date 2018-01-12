import { observable, action, runInAction, useStrict } from 'mobx';
import axios from './../axios/index'

class Album {
    @observable albums

    // 初始化 state
    constructor() {
        this.albums = []
    }

    @action getData = async () => {
        const albumsData = await axios.get("/top/album?offset=0&limit=10")
        runInAction(() => {
            this.albums = albumsData.data.albums
            console.log(albumsData)
        })
    }
}

export default new Album()