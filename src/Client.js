import React, { Component } from 'react';

export class Client extends Component{
    render(){
        return (
            <h2> The client Component {this.props.match.params.id}</h2>
        )
    }
}