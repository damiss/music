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
    formatDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    };
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
                        {
                            this.state.hotComments.length > 0
                                ? <HotCom hotCom={this.state.hotComments} />
                                : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const HotCom = function (props) {
    let date = function(date) {
        // var y = date.getFullYear();
        // var m = date.getMonth() + 1;
        // m = m < 10 ? '0' + m : m;
        var today = new Date().getDate();
        var d = date.getDate();
        // d = d < 10 ? ('0' + d) : d;
        d = d < today ? ('昨天') : "";
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var min = date.getMinutes();
        min = min < 10 ? ('0' + min) : min;
        // return y + '-' + m + '-' + d;
        return d + h + ':' + min 
    }
    return (
        <div>
            <h3 className={styles.uhd4}>精彩评论</h3>
            {
                props.hotCom.map((item) => (
                    <div key={item.commentId} className={[styles.itm,].join(" ")}>
                        <div className={[styles.head,].join(" ")}>
                            <a href="javascript:;">
                                <img src={item.user.avatarUrl} />
                            </a>
                        </div>
                        <div className={[styles.cntwrap,].join(" ")}>
                            <div className="">
                                <div className={[styles.cnt, styles.fbrk,].join(" ")}>
                                    <a href="javascript:;" className={[styles.cnt, styles.sfc7,].join(" ")}>{item.user.nickname}</a>：{item.content}
                                </div>
                            </div>
                            <div className={[styles.rp,].join(" ")}>
                                <div className={[styles.time, styles.sfc4,].join(" ")}>
                                    {date(new Date(item.time))}
                                </div>
                                <a href="javascript:void(0)"><i className={[styles.zan, styles.uicn2, styles.uicn212,].join(" ")}></i> ({item.likedCount})</a>
                                <span className={[styles.sep,].join(" ")}>|</span>
                                <a href="javascript:void(0)" className={[styles.sfc3,].join(" ")} >回复</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}