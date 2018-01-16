import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import styles from './songtb.css'

export default class Songtb extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log(this,"render")
        return (
            <div className={styles.songtb}>
                <div className={[styles.title, styles.clear].join(" ")}>
                    <h3>
                        <span className="f-ff2">歌曲列表</span>
                    </h3>
                    <span className={styles.sub}><span id="playlist-track-count">{this.props.data.trackCount}</span>首歌</span>
                    <div className={styles.more}>播放：<strong id="play-count" className={styles.fc7}>{this.props.data.playCount}</strong>次</div>

                </div>
                <div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={[styles.first, styles.w1].join(" ")}>
                                    <div className={styles.wp}>&nbsp;</div>
                                </th>
                                <th>
                                    <div className={[styles.wp, styles.af0].join(" ")}></div>
                                </th>
                                <th className={styles.w2}>
                                    <div className={[styles.wp, styles.af1].join(" ")}></div>
                                </th>
                                <th className={styles.w3}>
                                    <div className={[styles.wp, styles.af2].join(" ")}></div>
                                </th>
                                <th className={styles.w4}>
                                    <div className={[styles.wp, styles.af3].join(" ")}></div>
                                </th>
                            </tr>
                        </thead>
                        <Tbody tracks={this.props.data.tracks}>
                            
                        </Tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const Tbody = (props) => {
    console.log(props)
    return (
        <tbody>
            {/* {
                props.tracks.map((item) => (
                    <Tr key={item.al.id} name={item.al.name} />
                ))
            } */}
        </tbody>
    )
}
const Tr = (props) => {
    return (
        <tr className={styles.even}>
            <td className={styles.left}>
                <div className={styles.hd}>
                    <span className={styles.ply}></span>
                    <span className={styles.num}></span>
                </div>
            </td>
            <td className="">
                <div className="f-cb">
                    <div className={styles.tt}>
                        <div className={styles.ttc}>
                            <span className={styles.txt}>
                                <Link to="/">
                                    <b>{props.name}</b>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td className=" s-fc3">
                <span className="u-dur ">04:02</span>
                <div className="opt hshow">
                    <a className="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                    <span className="icn icn-fav" title="收藏"></span>
                    <span className="icn icn-share" title="分享"></span>
                    <span className="icn icn-dl" title="下载"></span>
                </div>
            </td>
            <td className="">
                <div className={styles.text} title="">
                    <span title="">
                        <Link to="">张浩威</Link>
                    </span>
                </div>
            </td>
            <td className="">
                <div className={styles.text} title="">
                    <span title="">
                        <Link to="">张浩威</Link>
                    </span>
                </div>
            </td>
        </tr>
    )
}