import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames'
import styles from './songtb.css'

@inject("play")
@observer
export default class Tbody extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props,"Tbody com props")
        this.state = {
            currentIndex: -1
        }

        this.handlerPlay = this.handlerPlay.bind(this)
    }
    handlerPlay(item, event) {
        this.props.play.addPlay(item)
        this.setState({
            currentIndex: event.target.dataset.index
        })
        console.log(this.state.currentIndex,"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
/*         console.log(this.playBtn)
        event.target.style.backgroundPosition = "-20px -128px" */
    }
    componentDidMount() {
        console.log(this.playBtn)
    }
    render() {
        console.log(this.props, "Tbody com props")
        const play = classNames({
            [styles.ply]: this.state.onPlay,

        })
        return (
            <tbody>
                {
                    this.props.tracks.map((item, index) => (
                        <tr className={index % 2 == 0 ? styles.even : ""} key={item.id}>
                            <td className={styles.left}>
                                <div className={styles.hd}>
                                    <span className={[styles.ply, index == this.state.currentIndex ? styles.plyzslt : null].join(' ')} data-index={index} title="播放" onClick={this.handlerPlay.bind(null, item)}
                                        ref={btn => this.playBtn = btn}
                                    ></span>
                                    <span className={styles.num}>{index + 1}</span>
                                </div>
                            </td>
                            <td className="">
                                <div className={styles.clear}>
                                    <div className={styles.tt}>
                                        <div className={styles.ttc}>
                                            <span className={styles.txt}>
                                                <Link to="/" title={item.name}>
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
                                        <Link to="" title={item.ar[0].name}>{item.ar[0].name}</Link>
                                    </span>
                                </div>
                            </td>
                            <td className="">
                                <div className={styles.text} title="">
                                    <span title="">
                                        <Link to="" title={item.al.name}>{item.al.name}</Link>
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