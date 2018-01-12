import React, { Component } from 'react'
import { observable, autorun } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject( "album", )
@observer
export default class Album extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.album.getData();
        console.log(eval(this.props.album),"alubms")
    }
    render() {
        const album = this.props.album.albums.map((item) =>(
            <li key={item.id}>{item.name}</li>
        ))
        return (
            <div>
                <ul>
                    {album}
                </ul>
            </div>
        )
    }
}