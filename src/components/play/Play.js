import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import classNames from 'classnames'

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
    }
    componentDidMount() {
        console.log(this.audio)
    }

    handlePlay() {
        if(!this.state.play) {
            this.audio.play()
            this.setState({
                play: !this.state.play
            })
        }else {
            this.audio.pause()
            this.setState({
                play: !this.state.play
            })
        }
    }
    render() {
        console.log(this.props.play.playlist)
        let playlist = this.props.play.playlist
        console.log(playlist.length)
        const playBtn = classNames({
            [styles.pas]: !this.state.play,
            [styles.ply]: true,
            [styles.jflag]: true
        })
        console.log(playBtn)
        console.log(this.props.play.nowPlay)
        return (
            <div>
                <audio
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
                            <div className={[styles.btns].join(" ")}>
                                <a href="javascript:;" className={styles.prv}></a>
                                <a href="javascript:;" className={playBtn}
                                    onClick={this.handlePlay}
                                ></a>
                                <a href="javascript:;" className={[styles.nxt,].join(" ")}></a>
                            </div>
                            <div className={[styles.head, styles.jflag].join(" ")}>
                                <img src="http://p1.music.126.net/8aUMwwbhUXCX3zrx3CyQ0Q==/6658642418046256.jpg?param=34y34" />
                                <a href="" hidefocus="true" className="mask"></a>
                            </div>
                            <div className={[styles.play].join(" ")}>
                                <div className={[styles.words].join(" ")}>
                                    <a href="javascript:;" className={[styles.ff1, styles.name, styles.fthide, styles.fc1].join(" ")}>she</a>
                                    <span className={[styles.by, styles.ff1, styles.fthide].join(" ")}>
                                        <span title="Grand Avenue">
                                            <a href="javascript:;">Grand Avenue</a>
                                        </span>
                                    </span>
                                </div>
                                <div className={[styles.pbar].join(" ")}>
                                    <div className={[styles.barbg, styles.jflag].join(" ")}>
                                        <div className={[styles.rdy].join(" ")}></div>
                                        <div className={[styles.cur].join(" ")}>
                                            <span className={[styles.btn, styles.ftdn, styles.falpha].join(" ")}>
                                                <i></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={[styles.time, styles.jflag].join(" ")}>
                                        <em>00:00</em> / 05:30
                                    </div>
                                </div>
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