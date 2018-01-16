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
        console.log(this)
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
                        <Tbody>
                            <Tr />
                        </Tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const Tbody = (props) => {
    return (
        <tbody>
            {props.children}
        </tbody>
    )
}
const Tr = (props) => {
    return (
        <tr>
            <td className={styles.left}>
                <div className={styles.hd}>
                    <span className={styles.ply}></span>
                    <span className={styles.num}></span>
                </div>
            </td>
            <td class="">
                <div class="f-cb">
                    <div class="tt">
                        <div class="ttc">
                            <span class="txt">
                                <Link to="/">
                                    <b title="When&nbsp;You're&nbsp;Gone">When&nbsp;You'r
                                        <div class="soil">vHB</div>e&nbsp;Gone
                                    </b>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td></td>
            <td></td>
        </tr>
    )
}