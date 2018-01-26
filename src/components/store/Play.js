import { observable, action, runInAction, useStrict } from 'mobx';
import axios from './../axios/index'

class Play {
    @observable playlist
    @observable nowPlay
    @observable ifPlay
    @observable songToPlay
    @observable currentIndex

    // 初始化 state
    constructor() {
        this.playlist = []
        this.ifPlay = false
        this.currentIndex = -1
        this.nowPlay = ''
    }

    @action addPlay = (item) => {
        // this.playlist.push(`http://music.163.com/song/media/outer/url?id=${musicId}.mp3`)
        this.playlist.push(item);
        // this.nowPlay = `http://music.163.com/song/media/outer/url?id=${musicId}.mp3`
        this.nowPlay = item
        this.ifPlay = true
        this.currentIndex = this.currentIndex + 1
        console.log(this.currentIndex)
    }

    @action clickPlay = () => {
        this.ifPlay = !this.ifPlay
    }

    @action next = () => {
        if (this.currentIndex < this.playlist.length - 1) {
            this.currentIndex = this.currentIndex + 1
        }else {
            this.currentIndex = 0
        }
        this.nowPlay = this.playlist[this.currentIndex]
    }
    @action pre = () => {
        if (this.currentIndex > 0) {
            this.currentIndex = this.currentIndex - 1
        } else {
            this.currentIndex = this.playlist.length - 1
        }
        this.nowPlay = this.playlist[this.currentIndex]
    }
}

export default new Play()