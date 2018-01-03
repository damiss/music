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

        this.handlePlay = this.handlePlay.bind(this)
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
                tracks: response.data.playlist.tracks,
                music: ""
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    handlePlay(id) {
        this.setState({
            music: `http://music.163.com/song/media/outer/url?id=${id}.mp3`
        });
        console.log(id)
    }
    render() {
        const history = this.props.history;
        const tracks = this.state.tracks.map( track => (
            <li key={track.id}>
                <span>{track.name}</span>---<span>{track.al.name}</span>--<span>{track.ar[0].name}</span>
                <input type="button" value="播放" onClick={this.handlePlay.bind(this, track.id)}/>
            </li>
        ))
        console.log(this.state.tracks)
        return (
            <div>
                <SubNav history={history} />
                <div style={{textAlign: "center"}}>
                    <img width="140px" height="140px" src={this.state.data.coverImgUrl} alt=""/>
                    <hr/>
                    <h2>{this.state.data.description}</h2>
                    <hr/>
                    <ul>
                        {tracks}
                    </ul>
                    <audio autoPlay src={this.state.music} controls="controls"></audio>
                </div>
            </div>
        )
    }
}