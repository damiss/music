import React, { Component } from 'react';
import classNames from 'classnames'

import Playlist from "./../../pages/Playlist/index";
import styles from './../../style/disNav.css'

export default class DisNav extends Component {
    constructor(props) {
        super(props);

        this.handlePath = this.handlePath.bind(this)
    }
    handlePath() {
        this.props.history.push('/playlist')
    }
    render() {
        const cx = classNames({
            [styles.tit]: true,
            [styles.clear]: true
        })
        return (
            <div className={cx}>
                <span className={styles.name} onClick={this.handlePath}>
                    热门推荐
                </span> 
            </div>
        )
    }
}