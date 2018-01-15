import React, {Component} from 'react';
import Info from './Info'
import Songtb from './Songtb'

export default class Playlist extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const props = this.props
        return (
            <div>
                <Info props={props}>
                </Info>
                
            </div>
        )
    }
}