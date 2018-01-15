import React, { Component } from 'react'

import styles from './btns.css'

export default class Btns extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAll: false
        }

        this.handleSlice = this.handleSlice.bind(this)
    }
    handleSlice(str) {
        let result = str.slice(0, 99);
        result = result + "...";
        return result;
    }
    handleToggle() {
        this.setState({
            showAll: !this.state.showAll
        })
    }
    render() {
        let desc = "";
        desc = String(this.props.description)
        desc = desc.replace(/\n/g, "<br/>")
        let allDesc = "<b>介绍：</b><br />" + desc;
        if(desc.length > 100) {
            desc = desc.slice(0, 99);
            desc = "<b>介绍：</b><br />" + desc + "..."
        }else {
            return false
        }
        let showStyle = {
            display: this.state.showAll ? "block" : "none"
        }
        return (
            <div>
                <div className={[styles.btns, styles.clear].join(" ")}>
                    <a href="javascript:;" className={styles.addply}>
                        <i>
                            <em className={styles.ply}></em>
                            播放
                    </i>
                    </a>
                    <a href="javascript:;" className={styles.add}></a>
                    <a className={[styles.fav]} href="javascript:;">
                        <i>({this.props.data.subscribedCount})</i>
                    </a>
                    <a className={styles.share} href="javascript:;"><i>({this.props.data.shareCount})</i></a>
                    <a className={styles.download} href="javascript:;"><i>下载</i></a>
                    <a className={styles.comment}><i>(<span id="cnt_comment_count">{this.props.data.commentCount}</span>)</i></a>
                </div>
                <div className={styles.tags}>
                </div>
                <div className={styles.intr} dangerouslySetInnerHTML={{ __html: desc }} style={{display: !this.state.showAll ? "block" : "none"}}></div>
                <div className={styles.intr} dangerouslySetInnerHTML={{ __html: allDesc }} style={showStyle}></div>
                <div>
                    <a href="javascript:;" className={styles.fc7} onClick={this.handleToggle.bind(this)}>{!this.state.showAll ? "展开" : "收起"}<i style={{ backgroundPosition: this.state.showAll ? "-45px -520px" : "-65px -520px"}}></i></a>
                    </div>
            </div>
            
        )
    }
}