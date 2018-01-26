import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

import styles from './play.css'

@inject("play")
@observer
export default class Time extends Component {
    render() {
        return (
            <div className={[styles.pbar].join(" ")}>
                <div className={[styles.barbg, styles.jflag].join(" ")}>
                    <div className={[styles.rdy].join(" ")}></div>
                    <div className={[styles.cur].join(" ")}>
                        <span className={[styles.btn, styles.ftdn, styles.falpha].join(" ")}>
                            <i></i>
                        </span>
                    </div>
                </div>
                <div className={[styles.time, styles.jflag].join(" ")}>
                    <em>00:00</em> / 05:30
                </div>
            </div>
        )
    }
}