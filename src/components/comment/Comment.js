import React from 'react';

import axios from "./../../components/axios";
import styles from "./comment.css"

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            comments: [],
            hotComments: [],
        }
    }
    componentDidMount() {
        const _this = this;
        axios.get(`/comment/playlist${this.props.search}`)
            .then(function (response) {
                console.log(response, "axios setstate");
                _this.setState({
                    data: response.data,
                    comments: response.data.comments,
                    hotComments: response.data.hotComments
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        console.log(this)
        return (
            <div className={styles.ncmt}>
                <div id="">
                    <div className={[styles.utitle, styles.utitle1].join(" ")}>
                        <h3>
                            <span className={[styles.fff2,].join(" ")}>评论</span>
                        </h3>
                        <span className={[styles.sub, styles.sfc3].join(" ")}>
                            共<span className={[styles.jflag,].join(" ")}>119</span>条评论
                        </span>
                    </div>
                </div>
                <div className={styles.mcmmt}>
                    <div className={styles.cmmts}>
                        <h3 className={styles.uhd4}>精彩评论</h3>
                        <Com hotCom={this.state.hotComments} />                        
                    </div>
                </div>
            </div>
        )
    }
}

const Com = (props) => (
    <div className={[styles.itm,].join(" ")}>
        <div className={[styles.head,].join(" ")}>
            <a href="javascript:;">
                <img src="http://p1.music.126.net/e925c_8Rssl-19ZjJGd4EQ==/18601537720870676.jpg?param=50y50" />
            </a>
        </div>
        <div className={[styles.cntwrap,].join(" ")}>
            <div className="">
                <div className={[styles.cnt, styles.fbrk,].join(" ")}>
                    <a href="javascript:;" className={[styles.cnt, styles.sfc7,].join(" ")}>{props.hotCom.user.nickName}</a>：你说你很累，已无法再爱上谁。
                                    </div>
            </div>
            <div className={[styles.rp,].join(" ")}>
                <div className={[styles.time, styles.sfc4,].join(" ")}>08:53</div>
                <a href="javascript:void(0)"><i className={[styles.zan, styles.uicn2, styles.uicn212,].join(" ")}></i> (65)</a>
                <span className={[styles.sep,].join(" ")}>|</span>
                <a href="javascript:void(0)" className={[styles.sfc3,].join(" ")} >回复</a>
            </div>
        </div>
    </div>
)