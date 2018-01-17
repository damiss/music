import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import styles from './songtb.css'

export default class Tbody extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props,"Tbody com props")
    }
    render() {
        console.log(this.props, "Tbody com props")
        return (
            <tbody>
                {
                    this.props.tracks.map((item, index) => (
                        <tr className={index % 2 == 0 ? styles.even : ""} key={item.id}>
                            <td className={styles.left}>
                                <div className={styles.hd}>
                                    <span className={styles.ply}></span>
                                    <span className={styles.num}>{index + 1}</span>
                                </div>
                            </td>
                            <td className="">
                                <div className={styles.clear}>
                                    <div className={styles.tt}>
                                        <div className={styles.ttc}>
                                            <span className={styles.txt}>
                                                <Link to="/">
                                                    {item.name}
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="s-fc3">
                                <span className={styles.udr}>
                                    {
                                        parseInt((item.dt % (1000 * 60 * 60)) / (1000 * 60)) < 10 
                                            ? "0" + parseInt((item.dt % (1000 * 60 * 60)) / (1000 * 60))
                                            : parseInt((item.dt % (1000 * 60 * 60)) / (1000 * 60))

                                    }
                                    :
                                    {
                                        parseInt((item.dt % (1000 * 60)) / (1000)) < 10 
                                            ? "0" + parseInt((item.dt % (1000 * 60)) / (1000))       
                                            : parseInt((item.dt % (1000 * 60)) / (1000))
                                    }
                                </span>
                                <div className={[styles.opt, styles.hshow].join(" ")}>
                                    <a className={[styles.uicn, styles.icnadd, styles.uicn81].join(" ")} href="javascript:;" title="添加到播放列表"></a>
                                    <span className={[styles.icn, styles.icnfav].join(" ")}  title="收藏"></span>
                                    <span className={[styles.icn, styles.icnshare].join(" ")} title="分享"></span>
                                    <span className={[styles.icn, styles.icndl].join(" ")} title="下载"></span>
                                </div>
                            </td>
                            <td className="">
                                <div className={styles.text} title="">
                                    <span title="">
                                        <Link to="">{item.ar[0].name}</Link>
                                    </span>
                                </div>
                            </td>
                            <td className="">
                                <div className={styles.text} title="">
                                    <span title="">
                                        <Link to="">{item.al.name}</Link>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        )
    }
}