import { observable, action, runInAction, useStrict } from 'mobx';
import axios from './../axios/index'

class TodaySong {
    @observable songList

    // 初始化 state
    constructor() {
        this.songList = []
    }

    @action getData = async () => {
        const songs = await axios.get("/recommend/songs")
        runInAction(() => {
            this.songList = songs
            console.log(songs)
        })
    }
}

export default new TodaySong()