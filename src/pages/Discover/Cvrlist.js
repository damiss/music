import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import classNames from 'classnames'

import axios from './../../components/axios/index'
import styles from './../../style/cvrList.css'

@observer
export default class Cvrlist extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount() {
        this.props.personalized.getDataRes()
    }
    handleClick(id) {
        this.props.history.push(`/playlist?id=${id}`)
    }
    render() {
        /* const goodData = this.props.resource.data.$mobx.values;
        const goodHtml = goodData.map((item) => (
            <li key={item.id}
                onClick={this.handleClick.bind(null, item.id)}
            >
                <div><img src={item.coverImgUrl} alt="" /></div>
                <p>{item.name}</p>
            </li>
        )) */
        /* (item) => (
            <li key={item.id}
                onClick={this.handleClick.bind(null, item.id)}
            >
                <div className={styles.cover}><img src={item.picUrl} alt="" /></div>
            </li>
        ) */
        console.log(this.props.personalized)
        const listData = this.props.personalized.data;
        const _this = this;
        var i = 0;
        const listHtml = listData.map(function(item) {
            if(i < 8) {
                console.log(i)
                i++;
                return (
                    <li key={item.id}
                        onClick={_this.handleClick.bind(null, item.id)}
                    >
                        <div className={styles.cover}><img src={item.picUrl} alt="" /></div>
                    </li>
                )
            }else {
                return;
            }
        })
        
        const cx = classNames({
            [styles.clear]: true,
            [styles.cvrlist]: true
        })
        return (
            <div>
                <ul className={cx}>
                    {listHtml}
                </ul>
            </div>
        )
    }
}