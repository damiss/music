import React, { Component } from 'react'

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
                                <th className="first w1">
                                    <div className="wp">&nbsp;</div>
                                </th>
                                <th>
                                    <div className="wp af0"></div>
                                </th>
                                <th className="w2">
                                    <div className="wp af1"></div>
                                </th>
                                <th className="w3">
                                    <div className="wp af2"></div>
                                </th>
                                <th className="w4">
                                    <div className="wp af3"></div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}