import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import classNames from 'classnames'

import styles from './../../style/cvrList.css'


@inject("recommend")
@observer
export default class Recommend extends Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.props.recommend.getData()
    }
    handleClick(id) {
        this.props.history.push(`/playlist?id=${id}`)
    }
    render() {
        let data = [];
        data = this.props.recommend.recommend;
        console.log(data)
        const _this = this
        let num = 0
        let html = data.map(function(item) {
            while(num < 3) {
                num++
                return (
                    <li key={item.id}>
                        <div className={[styles.cover]}
                        onClick={_this.handleClick.bind(null, item.id)}
                        >
                            <img src={item.picUrl} alt="" />
                            <a className={styles.mask}></a>
                            <div className={styles.button}>
                                <span className={styles.iconPlay}></span>
                                <span className={styles.iconHeadset}></span>
                                <span className={styles.nb}>
                                    {/* (Math.round((item.playCount /10000) * 100) / 100) */}
                                    {
                                        (item.playCount) < 100000
                                            ? parseInt(item.playcount)
                                            : parseInt(item.playcount / 10000) + "万"
                                    }
                                </span>
                            </div>
                        </div>
                        <p className={styles.dec}
                        >
                            <a href="javascript: ;">{item.name}</a>
                        </p>
                    </li>
                )
            }
        })
        const cx = classNames({
            [styles.clear]: true,
            [styles.cvrlist]: true
        })
        return (
            <div>
                <ul className={cx}>
                    <li>
                        <a href="javascript:;" title="每日歌曲推荐" className={[styles.udate].join(" ")}>
                            <span className={[styles.head].join(" ")}>星期五</span>
                            <span className={[styles.bd].join(" ")}>19</span>
                            <span className={[styles.mask].join(" ")} title="每日歌曲推荐" href="javascript:;"></span>
                        </a>
                        <p className={[styles.dec].join(" ")}>
                            <a className={[styles.tit].join(" ")} title="每日歌曲推荐" href="/discover/recommend/taste">每日歌曲推荐</a>
                        </p>
                        <p className={[styles.idv].join(" ")} title="根据你的口味生成，每天6:00更新">根据你的口味生成，<br />每天6:00更新</p>
                    </li>
                    {html}
                </ul>
            </div>
        )
    }
}