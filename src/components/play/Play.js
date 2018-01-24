import React, { Component } from 'react';

import styles from './play.css'


export default class Play extends Component {
    render() {
        return (
            <div>
                {/*  <div className={[styles.mbtmbar].join(" ")}>
                    <div className={[styles.mplaybar, styles.mplaybarlock].join(" ")}id="auto-id-KoWaTe7TCI34Ix34">
                        <div className={[styles.updn].join(" ") }>
                            <div className={[styles.left, styles.ffl].join(" ")}><a href="javascript:;" className={[styles.btn].join(" ")} hidefocus="true" data-action="lock"></a></div>
                            <div className={[styles.right, styles.ffl].join(" ") }></div>
                        </div>
                        <div className={[styles.bg].join(" ") }></div>
                        <div className={[styles.hand].join(" ") } title="展开播放条"></div>
                        <div className={[styles.warp].join(" ") } id="g_player" >
                            <div className={[styles.btns].join(" ") }>
                                <a href="javascript:;" hidefocus="true" data-action="prev" className={[styles.prev].join(" ") } title="上一首(ctrl+←)">上一首</a>
                                <a href="javascript:;" hidefocus="true" data-action="play" className={[styles.ply, styles.jflag].join(" ") } title="播放/暂停(p)">播放/暂停</a>
                                <a href="javascript:;" hidefocus="true" data-action="next" className={[styles.nxt].join(" ") } title="下一首(ctrl+→)">下一首</a>
                            </div>
                            <div className={[styles.head, styles.jflag].join(" ") }><img src="http://p1.music.126.net/8aUMwwbhUXCX3zrx3CyQ0Q==/6658642418046256.jpg?param=34y34" /><a href="/song?id=1415024" hidefocus="true" className="mask"></a></div>
                            <div className={[styles.play].join(" ") }>
                                <div className={[styles.jflag, styles.words].join(" ") }>
                                    <a hidefocus="true" href="/song?id=1415024" className={[styles.fthide, styles.name, styles.fc1, styles.ff1].join(" ")} title="She">She</a><span className={[styles.by, styles.fthide, styles.ff1].join(" ")}><span title="Grand Avenue"><a className="" href="/artist?id=34201" hidefocus="true">Grand&nbsp;Avenue</a></span></span><a href="/playlist?id=534497099&amp;_hash=songlist-1415024" className={[styles.src].join(" ") } title="来自歌单"></a></div>
                                <div className={[styles.mpbar].join(" ") } data-action="noop">
                                    <div className={[styles.barbg, styles.jflag].join(" ") } id="auto-id-OsUCUQWKaS6Gf6S8">
                                        <div className={[styles.rdy].join(" ") } ></div>
                                        <div className={[styles.cur].join(" ")} ><span className={[styles.ben, styles.ftdn, styles.falpha].join(" ") } id="auto-id-hwumSVnoPTUcr4cd"><i></i></span></div>
                                    </div>
                                    <span className={[styles.jflag, styles.time].join(" ") }><em>00:00</em> / 05:34</span>
                                </div>
                            </div>
                            <div className={[styles.oper, styles.ff1].join(" ") }>
                                <a href="javascript:;" hidefocus="true" data-action="like" className="icn icn-add j-flag" title="收藏">收藏</a>
                                <a href="javascript:;" hidefocus="true" data-action="share" className="icn icn-share" title="分享">分享</a>
                            </div>
                            <div className="ctrl f-fl f-pr j-flag">
                                <div className="m-vol" id="auto-id-vcozaUqOmlpl6U4Q">
                                    <div className="barbg"></div>
                                    <div className="vbg j-t" id="auto-id-nl8wGkC9fPsIG4bo"><div className="curr j-t" ></div>
                                        <span className="btn f-alpha j-t" ></span></div>
                                </div>
                                <a href="javascript:;" hidefocus="true" data-action="volume" className="icn icn-vol"></a>
                                <a href="javascript:;" hidefocus="true" data-action="mode" className="icn icn-loop" title="循环"></a>
                                <span className="add f-pr">
                                    <span className="tip" >已添加到播放列表</span>
                                    <a href="javascript:;" title="播放列表" hidefocus="true" data-action="panel" className="icn icn-list s-fc3">54</a>
                                </span>
                                <div className="tip tip-1" >循环</div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className={styles.playbar}>
                    <div className={styles.updn}>
                        <div className={[styles.left, styles.ff1].join(" ") }>
                            <a href="javascript:;" className={[styles.btn].join(" ")} hidefocus="true" data-action="lock"></a>
                        </div>
                        <div className={[styles.right, styles.ff1].join(" ")}></div>
                    </div>
                    <div className={[styles.bg].join(" ")}>
                        <div className={styles.wrap}>
                            <div className={[styles.btns].join(" ")}>
                                <a href="" className={styles.prv}></a>
                                <a href="" className={[styles.prv, styles.jflag].join(" ")}></a>
                                <a href="" className={[styles.nxt,].join(" ")}></a>
                            </div>
                            <div className={[styles.head, styles.jflag].join(" ")}><img src="http://p1.music.126.net/8aUMwwbhUXCX3zrx3CyQ0Q==/6658642418046256.jpg?param=34y34"/>
                                <a href="" hidefocus="true" class="mask"></a>
                            </div>
                            <div className={[styles.play].join(" ")}></div>


                            {/* <div className={[styles.songs].join(" ")}>
                                <div className={[styles.songpic].join(" ")}>
                                    <a href="" className={[styles.pic].join(" ")}>
                                        <img src="" alt="" />
                                    </a>
                                </div>
                                <div className={[styles.ctr].join(" ")}>
                                    <div className={[styles.songname]}>
                                        <a href="">she</a>
                                        <a href="">SheGrand Avenue</a>
                                    </div>
                                    <div className={[styles.rdy]}>
                                        <div className={[styles.tbr]}></div>
                                        <div className={[styles.btn]}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={[styles.list].join(" ")}></div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}