import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject("todaySong",)
@observer
export default class TodaySongs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: true
        }
    }
    componentDidMount() {
        // this.props.todaySong.getData()
    }
    render() {
        let data = [];
        // data = this.props.todaySong.songList
        return (
            <div>
                recommend
                {console.log(data, "!!!!!!!!!!!!!!!!!!!")}
                {
                    data.map((item) => (
                        <h4 key={item.id}>{item.name}</h4>
                    ))
                }
            </div>
        )
    }
}