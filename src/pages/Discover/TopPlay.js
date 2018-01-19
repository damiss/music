import React, { Component } from 'react';

import axios from './../../components/axios'

import DisNav from './../../components/disNav/DisNav'
import styles from "./../../style/topList.css"

export default class TopPlay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        console.log("toplist didmount")

        /*  async function getData() {
             const getList = await axios.get("/top/list?idx=1")
         } */
        const getData = async () => {
            const getList = await axios.get("/top/list?idx=0")
            const getList2 = await axios.get("/top/list?idx=2")
            const getList3 = await axios.get("/top/list?idx=3")
            return { getList, getList2, getList3 }
        }
        getData().then(function (response) {
            console.log(response)
        })
    }
    render() {
        console.log("list render")
        return (
            <div>
                <DisNav title="list" />
                <div className={[styles.nblist].join(" ")}>
                    <dl>
                        <dt className={[styles.top].join(" ")}>
                            <div className={[styles.cver, styles.ucove, styles.ucover4,].join(" ")}>
                                <img className="j-img" src="" />
                                <a href="/discover/toplist?id=19723756" className="msk" title="云音乐飙升榜"></a>
                            </div>
                            <div className="tit">
                                <a href="/discover/toplist?id=19723756" title="云音乐飙升榜"><h3 className="f-fs1 f-thide">云音乐飙升榜</h3></a>
                                <div className="btn">
                                    <a href="javascript:;" className="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" data-res-type="13" data-res-id="19723756" data-res-action="play" data-res-from="31" data-res-data="19723756">播放</a>
                                    <a href="javascript:;" hidefocus="true" className="s-bg s-bg-10 f-tdn subscribe-flag " data-plid="19723756" title="收藏">收藏</a>
                                </div>
                            </div>
                        </dt>
                        <dd>123</dd>
                    </dl> 
                </div>
                
            </div>

                )
    }
}