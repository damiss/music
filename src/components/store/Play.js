import { observable, action, runInAction, useStrict } from 'mobx';
import axios from './../axios/index'

class Play {
    @observable playlist
    @observable nowPlay

    // 初始化 state
    constructor() {
        this.playlist = []
        this.nowPlay = null
    }

    @action addPlay = (item) => {
        // this.playlist.push(`http://music.163.com/song/media/outer/url?id=${musicId}.mp3`)
        this.playlist.push(item);
        // this.nowPlay = `http://music.163.com/song/media/outer/url?id=${musicId}.mp3`
        this.nowPlay = item
    }
}

export default new Play()