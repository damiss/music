import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import classNames from 'classnames'

import Time from './Time'

import styles from './play.css'

@inject("play")
@observer
export default class Play extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            play: true
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handlePre = this.handlePre.bind(this)
    }
    componentDidMount() {
        console.log(this.audio)
    }

    handlePlay() {
        if(!this.props.play.ifPlay) {
            this.audio.play()
            this.props.play.clickPlay()
        }else {
            this.audio.pause()
            this.props.play.clickPlay()
        }
        console.log(this.audio.duration)
        console.log(this.audio.startOffsetTime)
    }
    handleNext() {
        this.props.play.next()
        console.log(this.props.play.currentIndex)
    }
    handlePre() {
        this.props.play.pre()
        console.log(this.props.play.currentIndex)
    }
    render() {
        // console.log(this.props.play.playlist)
        let playlist = this.props.play.playlist
        // console.log(playlist.length)
        const playBtn = classNames({
            [styles.pas]: this.props.play.ifPlay,
            [styles.ply]: true,
            [styles.jflag]: true
        })
        console.log(playBtn)
        console.log(this.props.play.nowPlay)
        return (
            <div>
                <audio
                    id="audio"
                    autoPlay="autoPlay"
                    controls 
                    style={{ "position": "fixed", "bottom": "50px", "left": "50px" }} 
                    src={`http://music.163.com/song/media/outer/url?id=${this.props.play.nowPlay && this.props.play.nowPlay.id}.mp3`}
                    ref={audio => this.audio = audio}
                >
                    您的浏览器不支持 audio 标签。
                </audio>
                <div className={styles.playbar}>
                    <div className={styles.updn}>
                        <div className={[styles.left, styles.ff1].join(" ")}>
                            <a href="javascript:;" className={[styles.btn].join(" ")} hidefocus="true" data-action="lock"></a>
                        </div>
                        <div className={[styles.right, styles.ff1].join(" ")}></div>
                    </div>
                    <div className={[styles.bg].join(" ")}>
                        <div className={styles.wrap}>
                            <ConBtn playBtn={playBtn} handle={this.handlePlay} pre={this.handlePre} next={this.handleNext} />
                            <MusicPic />
                            <div className={[styles.play].join(" ")}>
                                <MusicName />
                                <Time />
                            </div>
                            <div className={[styles.oper, styles.ff1].join(" ")}>
                                <a href="javascript:;" hidefocus="true" data-action="like" className={[styles.icn, styles.icnadd, styles.jflag].join(" ")} title="收藏">收藏</a>
                                <a href="javascript:;" hidefocus="true" data-action="share" className={[styles.icn, styles.icnshare].join(" ")} title="分享">分享</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ConBtn = (props) => (
    <div className={[styles.btns].join(" ")}>
        <a href="javascript:;" className={styles.prv} onClick={props.pre}></a>
        <a href="javascript:;" className={props.playBtn}
            onClick={props.handle}
        ></a>
        <a href="javascript:;" className={[styles.nxt,].join(" ")} onClick={props.next}></a>
    </div>
)
const MusicPic = (props) => (
    <div className={[styles.head, styles.jflag].join(" ")}>
        <img src="http://p1.music.126.net/8aUMwwbhUXCX3zrx3CyQ0Q==/6658642418046256.jpg?param=34y34" />
        <a href="" hidefocus="true" className="mask"></a>
    </div>
)
const MusicName = (props) => (
    <div className={[styles.words].join(" ")}>
        <a href="javascript:;" className={[styles.ff1, styles.name, styles.fthide, styles.fc1].join(" ")}>she</a>
        <span className={[styles.by, styles.ff1, styles.fthide].join(" ")}>
            <span title="Grand Avenue">
                <a href="javascript:;">Grand Avenue</a>
            </span>
        </span>
    </div>
)