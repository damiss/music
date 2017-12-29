import React, { Component } from 'react'
import SubNav from './../../components/subNav/index'

import axios from './../../components/axios/index'

export default class Playlist extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            tracks: []
        }
    }

    componentDidMount() {
        // axios.get('')
        // console.log(this.props.location.search.replace("?id=", ""));
        const _this = this;
        axios.get(`/playlist/detail${this.props.location.search}`)
        .then(function(response) {
            console.log(response);
            _this.setState({
                data: response.data.playlist,
                tracks: response.data.playlist.tracks
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    render() {
        const history = this.props.history;
        const tracks = this.state.tracks.map( track => (
            <li>
                <span>{track.name}</span>--------<i>{track.al.name}</i>
            </li>
        ))
        console.log(this.state.tracks)
        return (
            <div>
                <SubNav history={history} />
                <div>
                    <img src={this.state.data.coverImgUrl} alt=""/>
                    <p>{this.state.data.description}</p>
                    <ul>
                        {tracks}
                    </ul>
                </div>
            </div>
        )
    }
}